# -*- coding: utf-8 -*-
"""
Created on Wed Jan 15 10:44:07 2020

@author: Formation
"""

import psycopg2

try:
    conn = psycopg2.connect(dbname="test_isprs", user="postgres", password="postgres",host="localhost",port="5433")
except:
    print("I am unable to connect to the database")

cur = conn.cursor()
try:
    cur.execute("SELECT * FROM country")
    rows = cur.fetchall()
    print(rows)
except psycopg2.Error as e:
    pass