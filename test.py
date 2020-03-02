# -*- coding: utf-8 -*-
"""
Created on Sat Nov 23 16:17:45 2019

@author: Yay
"""

import numpy as np

lines = []

with open('ISPRS2020_auteurs.csv','r',encoding='latin-1') as file:
    for line in file.readlines():
        line_tmp=np.array(line.split('"'))
        if len(line_tmp)==0:
            line_tmp = line
        line=[]
        for txt in line_tmp:    
#            line.append(np.array(txt.split(';')))
            line.append(txt.split(';'))
        lines.append(line)
        print(len(lines[-1]))
print('Data loaded !\n')
print('Attention !!! la colonne paper_authors contient parfois des gens séparés par ";" ou "," -> fuck up le nb de colonnes lues.')
#lines=np.array(lines)
#for i in range(len(lines[1])):
#    print(lines[0][i],lines[1][i])
#    print('-----------------')
#print (lines[1])
print(lines[0])