# -*- coding: utf-8 -*-
"""
Created on Wed Jan 15 10:44:07 2020

@author: Formation
"""

import psycopg2

def load_commands():
    file_sqlcommand_ini = open("C:/Users/Formation/Pictures/AS_papers/sql_importTable.txt")
    sqlcommand_ini = file_sqlcommand_ini.readlines()
    return sqlcommand_ini

def preprocessing():
    try:
        conn = psycopg2.connect(dbname="test", user="postgres", password="postgres",host="localhost",port="5433")
    except:
        print("I am unable to connect to the database")
    
    curs = conn.cursor()
    try:
        curs.execute('')
        rows = curs.fetchall()
        connection.commit()
        print(rows)
    except psycopg2.Error as e:
        print("nope, except")
        pass
    finally:
    #closing database connection.
        if(conn):
            curs.close()
            conn.close()
            print("PostgreSQL connection has been closed")

if __name__ == '__main__':
    sqlcommand_ini = load_commands()
    print(sqlcommand_ini)
    preprocessing()