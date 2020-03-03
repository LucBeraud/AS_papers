# -*- coding: utf-8 -*-
"""
Created on Wed Jan 15 10:44:07 2020

@author: KHOJ Hanaa, SINEY Hadrien, SARGISSIAN Andre, BERAUD Luc

IGAST 2019-2020, ENSG-UPEM - projet Analyse Spatiale, responsible IGN Paul CHAPRON
For Clement MALLET - ISPRS 24th Congress (Nice, FR)

This script require the definition of a PostgreSQL database. Fill the connection parameters at the bottom of the script before the function calls.
This script prepare the database from the CSV file of the ISPRS application form to the spatial database with the information of the articles, authors and location of the main author's organization.
"""

import psycopg2
from inspect import currentframe, getframeinfo
from opencage.geocoder import OpenCageGeocode
import time
import random

########## Function that returns the query commands from a text file which will be executed in the next function
def load_commands():
    """
    Load SQL command from text files (prevent tens of ugly lines just for that)
    return: String with the SQL command line
    """
    file_sqlcommand_ini = open("C:/Users/BERAUD/Desktop/ENSG/IT3/Prj-ISPRS/AS_papers/sql_importTable.txt")
    list_sqlcommand_ini = file_sqlcommand_ini.readlines()   # get all lines into a list
    sqlcommand_ini = ''     # to convert list to string
    for x in list_sqlcommand_ini:   # loop over all lines
        sqlcommand_ini+=x   # concatenate the next command part
    return sqlcommand_ini

########## Function that creates tables using the sqlcommand_ini
def preproc_createtables(sqlcommand_ini):
    """
    Do the preprocessing of the table. Main function.
    Be carefull : drop tables article,author,country,isprs_brut,organisation,theme and postgis extension if exists
    param sqlcommand_ini: String, first SQL command line to execute, initialize and pre-fill the tables
    """
    try:
        line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
        conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
        curs = conn.cursor()    # create cursor
        try:
            line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
            #print(line_conn)
            curs.execute(sqlcommand_ini)    # execute SQL command
            #print('Tables initialized')
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
                #print(rows)
                list_adress = [] 
                paperid = []
                #Filling the address list 
                for i in range(len(rows)):
                    paperid.append(rows[i][0])
                    if ";" in rows[i][1]:
                        line = rows[i][1].split(";")
                        adress = line[1][3:]
                    else:
                        adress = rows[i][1]
                    list_adress.append(adress)
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
    return list_adress,paperid

def geocoding(list_adress,paperid):
    """
    Part of the geocoding: do the location requests of the adresses and return longitudes and latitudes
    param list_adress: list of adresses to geocode (string)
    return coordinates: geolocated coordinates of the adresses (longitude, latitude)
    
    Error of geocoding : maybe OSM detect a bot through regular request -> set a random counter between 1.5 and 2.5sec ?
    Otherwise, a loooot of request fails (and also maybe a OSM usual saturation affect it)
    """
    coordinates=[] #List that will contain the latitude and the longitude of each address 
    verbose=False
    nb_error = 0
    count = 0
    l = len(list_adress)
    print(l," adress to geocode")
    start_time = time.time()
    t_estimated = -60
    key = 'c9c6a755c8764c9d8f07d09f96794fdd'
    geocoder = OpenCageGeocode(key)
    for i,adress in enumerate(list_adress):
        if count==200:break #######
        temps = time.time()
        print('\n',str(count+1)+'/'+str(l),' ',round(count*100/l,2),'% | ',round((t_estimated-(temps-start_time))/60,2),'min remaining')
        count+=1
        intermed_time = time.time()
        t_estimated = l*(intermed_time-start_time)/count
        try: 
            try:
                results = geocoder.geocode(adress)
                coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']]) 
                print(adress,paperid[i])
                verbose=True
                time.sleep(random.random()+1.5)
            except:
                time.sleep(random.random()+1.5)
                try:
                    #we get the list elements after the first comma
                    adress_bis = adress.split(',')[1:]
                    adress2 = ''
                    #we concatenate the adress elements                        
                    for ad in adress_bis:
                        adress2+=ad
                    results = geocoder.geocode(adress2)
                    coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']])
                    print(adress2)
                    verbose=True
                except :
                    time.sleep(random.random()+1.5)
                    try:
                        #we get the last list element 
                        adress = adress.split(',')[-1]
                        results = geocoder.geocode(adress)
                        coordinates.append([results[0]['geometry']['lat'], results[0]['geometry']['lng']])
                        print(adress)
                        verbose=True
                    except:
                        nb_error+=1
                        print('--')
                        coordinates.append([400,400])
        except AttributeError as e :
            print("Nonvalid address, ",e)
            verbose=False
            
    if(verbose):
            print("\nGeocoding finished, got %s errors without geometry\n" %(str(nb_error)))    
    return coordinates 

def geometry_column(coordinates,list_adress,paperid):
    """
    Function that fills the geometry column using the coordinates list
    param coordinates: geolocated coordinates of the adresses (longitude, latitude)
    param list_adress: list of the adress (string) to geocode
    param paperid: list of the paper identifiers (string)
    """
    for i in range(len(coordinates)):
        x=coordinates[i][1]
        y=coordinates[i][0]
        if x==400:
            continue
        try:
            line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
            conn = psycopg2.connect(dbname=datbname, user=user_db, password=pswd,host=dbhost,port=dbport) # connect to the database
            curs = conn.cursor()    # create cursor
            try:
                line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
                postgres_insert_query = "UPDATE article SET geom= ST_SetSRID(ST_MakePoint(%s,%s), 4326) WHERE paperid=%s;"
                record_to_insert = (x,y, paperid[i])
                curs.execute(postgres_insert_query, record_to_insert)
                conn.commit()   # commit, validate the changes in the database
            except psycopg2.Error as e:
                print(e, ' | error probably line '+str(line_execCmdIni))
        except:
            print("Unable to connect to the database | see line "+str(line_conn))
    #closing database connection.
    if(conn):
        conn.close()
        print("\nSpatializing finished, connexion closed \n")
    

if __name__ == '__main__':
    
    """
    Define database caracteristics
    """
    global datbname;global user_db; global pswd; global dbhost; global dbport
    datbname = "ISPRS";user_db = "postgres";pswd = "postgres";dbhost = "localhost";dbport = "5432"
    
    """
    Processing
    """
    sqlcommand_ini = load_commands()    # Load SQL command filesprint(sqlcommand_ini)
    preproc_createtables(sqlcommand_ini)   # Execute the creation of the tables according to the database model
    list_adress,paperid = preproc_geocoding() # Get the adress of the main author's organization in the database
    coordinates=geocoding(list_adress,paperid) # # Process the geocoding
    geometry_column(coordinates,list_adress,paperid) # Insert the geometry in the postgis database
    
    print("\n Database ready for online upload !!!")