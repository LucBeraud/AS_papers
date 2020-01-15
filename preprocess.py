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

def preprocessing(sqlcommand_ini):
    """
    Do the preprocessing of the table. Main function.
    param sqlcommand_ini: String, first SQL command line to execute, initialize and pre-fill the tables
    """
    try:
        conn = psycopg2.connect(dbname="test", user="postgres", password="postgres",host="localhost",port="5433") # connect to the database
        line_conn = getframeinfo(currentframe()).lineno -1  # get line number minus 1 (connection line)
        try:
            curs = conn.cursor()    # create cursor
            curs.execute(sqlcommand_ini)    # execute SQL command
            line_execIni = getframeinfo(currentframe()).lineno -1   # get line number of the command execution
            conn.commit()   # commit, validate the changes in the database
            print('Tables initialized')
        except psycopg2.Error as e:
            print(e, ' | error probably line '+str(line_execIni))
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
    except:
        print("Unable to connect to the database | see line "+str(line_conn))
    finally:
        #closing database connection.
        if(conn):
            conn.close()
            print("Preprocessing finished, connexion closed")

if __name__ == '__main__':
    sqlcommand_ini = load_commands()    # Load SQL command files
    preprocessing(sqlcommand_ini)   # Execute preprocessing function, main function