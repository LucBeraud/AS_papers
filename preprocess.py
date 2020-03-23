# -*- coding: utf-8 -*-
"""
Created on Wed Jan 15 10:44:07 2020

@author: KHOJ Hanaa, SINEY Hadrien, SARGISSIAN Andre, BERAUD Luc

IGAST 2019-2020, ENSG-UPEM - projet Analyse Spatiale
For Clement MALLET - ISPRS 24th Congress (Nice, FR)

This script require the definition of a PostgreSQL database. Fill the connection parameters at the bottom of the script (before the function calls).
This script prepare the database from the CSV file of the ISPRS application form to the spatial database with the information of the articles.
The path of the CSV table to import must be specified in the "sql_importTable.txt" file. Its columns must corresponds to the ones defined in this file. The path of the "sql_importTable.txt" also, at the end of this script.
"""

import psycopg2 # library for postgresql
from inspect import currentframe, getframeinfo # library to get line numbers in the script
from opencage.geocoder import OpenCageGeocode # library of geocoding, 2500 requests/day for free account. OSM database and OSM rights
import time # library for time gestion
import random # library for generating random numbers (used to delay geocoding request avoiding overflow)

def load_commands(path):
    """
    Load SQL command from text files (prevent tens of ugly lines just for that)
    param path: path of the SQL commands file to load
    return: String with the SQL commands lines
    """
    file_sqlcommand_ini = open(path)
    list_sqlcommand_ini = file_sqlcommand_ini.readlines()   # get all lines into a list
    sqlcommand_ini = ''     # to convert list to string
    for x in list_sqlcommand_ini:   # loop over all lines
        sqlcommand_ini+=x   # concatenate the next command part
    return sqlcommand_ini

def preproc_createtables(sqlcommand_ini):
    """
    Do the preprocessing of the table. Main function using the SQL commands in the SQL commands text file.
    Be carefull : drop tables article,theme and postgis extension if exists
    param sqlcommand_ini: String, first SQL command line to execute, initialize and pre-fill the tables
    """
    try:
        line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
        conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
        curs = conn.cursor()    # create cursor
        try:
            line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
            curs.execute(sqlcommand_ini)    # execute SQL command
            conn.commit()   # commit, validate the changes in the database
        except psycopg2.Error as e:
            print(e, ' | error probably line '+str(line_execCmdIni))
        finally:
        #closing database connection.
            if(conn):
                conn.close()
                print("\nInitialization of tables finished, connexion closed \n")
    except:
        print("Unable to connect to the database | see line "+str(line_conn))
               

def preproc_geocoding():
    """
    Part of the geocoding: get the adress of the main author's organization and paper identifiers to be geocoded.
    return list_adress: list of the adress (string) to geocode
    return paperid: list of the paper identifiers (string)
    """
    try:
        line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
        conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
        try:
            curs = conn.cursor() # create cursor
            try:
                line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
                curs.execute("SELECT paperid,organisations FROM article")    # execute SQL command, get adresses of the first author
                rows = curs.fetchall() # fetches all rows of the query result set and returns a list of tuples
                list_adress = [] 
                paperid = []
                #Filling the address list with article's first author organisation adress
                for i in range(len(rows)): # looping over all adresses
                    paperid.append(rows[i][0]) # get the paperid
                    if ";" in rows[i][1]: # if several adresses
                        line = rows[i][1].split(";")
                        adress = line[0][3:] # we take the first one
                    else:
                        adress = rows[i][1] #else, we take the only one
                    list_adress.append(adress) # we save it
            except psycopg2.Error as e:
                print(e, ' | error probably line '+str(line_execCmdIni))
        except psycopg2.Error as e:
            print(e, ' | error probably at or after line '+str(line_execCmdIni-3))
        finally:
        #closing database connection.
            if(conn):
                conn.close()
                print("\nGetting adresses finished, connexion closed \n")
    except:
        print("Unable to connect to the database | see line "+str(line_conn))
    return(list_adress,paperid)

def geocoding(list_adress,paperid):
    """
    Part of the geocoding: do the location requests of the adresses and return longitudes and latitudes
    param list_adress: list of adresses to geocode (string)
    return coordinates: geolocated coordinates of the adresses (longitude, latitude)
    
    Error of geocoding : maybe OSM detect a bot through regular request -> set a random counter between 1.5 and 2.5sec ?
    Otherwise, a loooot of request fails (and also maybe a OSM usual saturation affect it)
    """
    """
    For OSM geocoder and not OpenCage: 
        import geocoder
        location = geocoder.osm(adress)
        rep=location.json
        coordinates.append([rep['lat'], rep['lng']]) 
    """
    coordinates=[] #List that will contain the latitude and the longitude of each address 
    verbose=False # boolean for testing if any error in the end
    nb_error = 0
    count = 0
    l = len(list_adress)
    print(l," adress to geocode")
    start_time = time.time()
    t_estimated = -60
    key = 'c9c6a755c8764c9d8f07d09f96794fdd' # API key linked to a personnal account. /!\ Limited to 2500 requests/day (and 15000 request/month ?) !!!!!!!!!
    geocoder = OpenCageGeocode(key) # create the geocoder object
    for i,adress in enumerate(list_adress): #looping over all article's first author organisation adress
#        if count==10:break ####### To run the script for few articles only
        temps = time.time()
        print('\n',str(count+1)+'/'+str(l),' ',round(count*100/l,2),'% | ',round((t_estimated-(temps-start_time))/60,2),'min remaining') # display steps
        count+=1
        intermed_time = time.time()
        t_estimated = l*(intermed_time-start_time)/count # estimating remaining time
        try:
            try:
#                results = geocoder.geocode(adress)
                results = geocoder.geocode(adress,limit='1',no_record='1') # Geocoding request, no_record=1 asking to not record the log of the request in their server (adress privacy, we never know), limit=1 because we only want the first answser so not need to have the 9 other behind
                coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']]) # Saving returned coordinates
                del results # delete temporary result in case of non-return next time
                print(adress)
                time.sleep(random.random()+1.2)
            except:
                time.sleep(random.random()+1.2)
                try:
                    #we get the adress elements after the first comma
                    adress_bis = adress.split(',')[1:]
                    adress2 = ''
                    #we concatenate the adress elements (we only remove the first element)                      
                    for ad in adress_bis:
                        adress2+=ad
                    results = geocoder.geocode(adress2,limit='1',no_record='1') # same as before
                    coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']]) # same as before
                    del results
                    print(adress2)
                except :
                    time.sleep(random.random()+1.2)
                    try:
                        #we get the last list element 
                        adress = adress.split(',')[-1]
                        results = geocoder.geocode(adress,limit='1',no_record='1') # same as before
                        coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']]) # same as before
                        del results
                        print(adress)
                    except:
                        nb_error+=1 # counting the number of errors
                        print('--')
                        coordinates.append([400,400]) # set an impossible coord to filter it afterward
            verbose=True # geocoding OK
        except AttributeError as e :
            print("Nonvalid address, ",e)
            verbose=False
            
    if(verbose):
            print("\nGeocoding finished, got %s errors set without geometry\n" %(str(nb_error)))    
    return coordinates 

def geometry_column(coordinates,list_adress,paperid):
    """
    Function that fills the geometry column using the coordinates list
    In the end  : table articles with everything, and geoarticles without fields without geometry
    param coordinates: geolocated coordinates of the adresses (longitude, latitude)
    param list_adress: list of the adress (string) to geocode
    param paperid: list of the paper identifiers (string)
    """
    for i in range(len(coordinates)): # looping over all geocoder coord
        x=coordinates[i][1] # latitude
        y=coordinates[i][0] # longitude
        if x==400: # if the geocoding failed (we then attributed an impossible value)
            continue # then we don't set any geometry in the table
        try:
            line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
            conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
            curs = conn.cursor()    # create cursor
            try:
                line_execCmdIni2 = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
                postgres_insert_query = "UPDATE article SET geom= ST_SetSRID(ST_MakePoint(%s,%s), 4326) WHERE paperid=%s;" # main text request, create the geometry to the paper with lat/long from paperid
                record_to_insert = (x,y, paperid[i]) # coordinates and paper id to insert in the request
                curs.execute(postgres_insert_query, record_to_insert) #executing the request, create the geometry to the paper with lat/long from paperid
                conn.commit()   # commit, validate the changes in the database
            except psycopg2.Error as e:
                print(e, ' | error probably line '+str(line_execCmdIni2))
        except:
            print("Unable to connect to the database | see line "+str(line_conn))
    ### Uncomment parts of the following lines to delete organisations columns or create a table with good geometries only.
    # try:
    #     line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
    #     conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
    #     curs = conn.cursor()    # create cursor
    #     line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
    #     curs.execute("ALTER TABLE article DROP COLUMN organisations;") # deletion of the organization colum
    #     curs.execute("CREATE TABLE geoarticles AS SELECT * FROM article WHERE geom IS NOT NULL;") # create a new table with valid geometries only
    #     curs.execute("DROP TABLE article;") # if we want to delete the table with all (valid and non-valid) geometries
    #     conn.commit() # commit, validate the changes in the database
    # except psycopg2.Error as e:
    #     print(e, ' | error probably line '+str(line_execCmdIni))
    #closing database connection.
    if(conn):
        conn.close()
        print("\nSpatializing finished, connexion closed \n")
    

if __name__ == '__main__':
    
    """
    Define database caracteristics
    """
    global datbname;global user_db; global pswd; global dbhost; global dbport # set as gloval variables to be valid in all the script, even in the functions
    datbname = "ISPRS";user_db = "postgres";pswd = "postgres";dbhost = "localhost";dbport = "5432" # set the database connection parameters
    
    """
    Processing
    """
    path = "C:/ms4w/Apache/htdocs/AS_papers/sql_importTable.txt" # path of the text file with all firsts the SQL commands lines
    sqlcommand_ini = load_commands(path)    # Load SQL command filesprint(sqlcommand_ini)
    preproc_createtables(sqlcommand_ini)   # Execute the creation of the tables according to the database model
    list_adress,paperid = preproc_geocoding() # Get the adress of the main author's organization in the database
    coordinates=geocoding(list_adress,paperid) # # Process the geocoding
    geometry_column(coordinates,list_adress,paperid) # Insert the geometry in the postgis database
    
    print("\n Database ready for online upload !!!")
