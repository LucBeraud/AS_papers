# -*- coding: utf-8 -*-
"""
Created on Wed Jan 15 10:44:07 2020

@author: Formation
"""

import psycopg2
from inspect import currentframe, getframeinfo

def load_commands():
    """
    Load SQL command from text files (prevent tens of ugly lines just for that)
    return: String with the SQL command line
    """
    file_sqlcommand_ini = open("C:/Users/Formation/Pictures/AS_papers/sql_importTable.txt")
    list_sqlcommand_ini = file_sqlcommand_ini.readlines()   # get all lines into a list
    sqlcommand_ini = ''     # to convert list to string
    for x in list_sqlcommand_ini:   # loop over all lines
        sqlcommand_ini+=x   # concatenate the next command part
    return sqlcommand_ini

def preproc_createtables(sqlcommand_ini):
    """
    Do the preprocessing of the table. Main function.
    Be carefull : drop tables article,author,country,isprs_brut,organisation,theme and postgis extension if exists
    param sqlcommand_ini: String, first SQL command line to execute, initialize and pre-fill the tables
    """
    try:
        line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
        conn = psycopg2.connect(dbname="isprs", user="postgres", password="postgres",host="localhost",port="5433") # connect to the database
        curs = conn.cursor()    # create cursor
        try:
            line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
            curs.execute(sqlcommand_ini)    # execute SQL command
            print('Tables initialized')
            conn.commit()   # commit, validate the changes in the database
        except psycopg2.Error as e:
            print(e, ' | error probably line '+str(line_execCmdIni))
        finally:
        #closing database connection.
            if(conn):
                conn.close()
                print("Preprocessing 1 finished, connexion closed \n")
    except:
        print("Unable to connect to the database | see line "+str(line_conn))
        
        
### Example
#        curs = conn.cursor()
#        try:
#            curs.execute(sqlcommand_ini)
#            try:
#                rows = curs.fetchall()
#                print(rows)
#            except psycopg2.Error as e:
#                print(e,' - internal loop')
#        except psycopg2.Error as e:
#            print(e,' - external loop')
#            
#        finally:
#        #closing database connection.
#            if(conn):
#                curs.close()
#                conn.close()
#                print("PostgreSQL connection has been closed")
############

def preproc_geocoding():
    """
    Part of the preprocessing : do the geocoding
    """
    try:
        line_conn = getframeinfo(currentframe()).lineno +1  # get line number plus 1 (connection line)
        conn = psycopg2.connect(dbname="isprs", user="postgres", password="postgres",host="localhost",port="5433") # connect to the database
        try:
            curs = conn.cursor()    # create cursor
            try:
                line_execCmdIni = getframeinfo(currentframe()).lineno +1   # get line number of the command execution
                curs.execute("SELECT paper_organisations FROM article")    # execute SQL command
                rows = curs.fetchall()
                for i in range(len(rows)):
                    adress = ''
                    if ";" in rows[i][0]:
                        line = rows[i][0].split(";")
                        adress = line[0][3:]
                    else:
                        adress = rows[i][0]
                    print(adress) ########### GEOCODE THIS in this loop ? store result in a list and create new column from it ?
#                conn.commit()   # commit, validate the changes in the database
            except psycopg2.Error as e:
                print(e, ' | error probably line '+str(line_execCmdIni))
            line_execIni = getframeinfo(currentframe()).lineno -1   # get line number of the command block execution
        except psycopg2.Error as e:
            print(e, ' | error probably line '+str(line_execIni))
        finally:
        #closing database connection.
            if(conn):
                conn.close()
                print("Preprocessing 2 finished, connexion closed \n")
    except:
        print("Unable to connect to the database | see line "+str(line_conn))
  

if __name__ == '__main__':
    sqlcommand_ini = load_commands()    # Load SQL command files
    preproc_createtables(sqlcommand_ini)   # Execute preprocessing function, main function
    preproc_geocoding()