# -*- coding: utf-8 -*-
"""
Created on Sat Nov 23 16:17:45 2019

@author: Yay
"""

import numpy as np

lines = []

with open('ISPRS2020_auteurs.csv','r',encoding='latin-1') as file:
    for line in file.readlines():
        line=np.array(line.split(';'))
        lines.append(line)
#        print(lines[-1].shape)
print('Data loaded !\n')
print('Attention !!! la colonne paper_authors contient parfois des gens séparés par ";" ou "," -> fuck up le nb de colonnes lues.')
#lines=np.array(lines)
#for i in range(len(lines[1])):
#    print(lines[0][i],lines[1][i])
#    print('-----------------')