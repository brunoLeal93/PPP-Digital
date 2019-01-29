from openpyxl import load_workbook
#from mongoengine import connect
from pymongo import MongoClient
#import sqlite3

client = MongoClient("mongodb://admin:admin@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")
db = client.BasePPPDigital

def importaBase():

    coll = db.Cotacao


    wb = load_workbook('MODELBASE.xlsx')
    sheet = wb['Plan2']
    #print(sheet.cell(column=1, row=1).value)
    row= 2
    vet = []


    #print(sheet.cell(column=1, row=row).value)

    while row < 200000:
        rt = []
        delay = []
        aux = row
        while sheet.cell(column=2, row=aux).value == sheet.cell(column=2, row=aux+1).value:

            if sheet.cell(column=10, row=row).value == 'RT':

                doc = {
                    'cod_pag': sheet.cell(column=11, row=aux).value,
                    'cod_serv': sheet.cell(column=12, row=aux).value,
                    'desc_serv': sheet.cell(column=13, row=aux).value,
                    'vlr_serv': sheet.cell(column=14, row=aux).value,
                    'vlr_fee': sheet.cell(column=15, row=aux).value
                }
                rt.append(doc)
            else:
                doc = {
                    'cod_pag': sheet.cell(column=11, row=aux).value,
                    'cod_serv': sheet.cell(column=12, row=aux).value,
                    'desc_serv': sheet.cell(column=13, row=aux).value,
                    'vlr_serv': sheet.cell(column=14, row=aux).value,
                    'vlr_fee': sheet.cell(column=15, row=aux).value
                }
                delay.append(doc)

                aux = aux + 1

        doc= {
                'tipo': sheet.cell(column=1, row=row).value,
                'cod_ativo':sheet.cell(column=2, row=row).value,
                'cod_ativo_bolsa':sheet.cell(column=3, row=row).value,
                'desc_ativo':sheet.cell(column=4, row=row).value,
                'fonte_ativo':sheet.cell(column=5, row=row).value.upper(),
                'seg_fonte_ativo':sheet.cell(column=6, row=row).value,
                'merc_ativo':sheet.cell(column=7, row=row).value,
                'classe_ativo':sheet.cell(column=8, row=row).value,
                'inf_disp':sheet.cell(column=9, row=row).value,
                'servicos': {
                    'rt': rt,
                    'delay': delay,
                }
        }

        vet.append(doc)

        row = row +1

        if sheet.cell(column=1, row=row).value == None:
            break
    #print(vet)
    coll.insert_many(vet)

def cotVisuPrin():
    coll = db.Cotacao

    vet = []

    for doc in coll.find({}, {"_id": 0, "desc_pag": 0, "desc_ticker": 0, "desc_pag": 0, "ticker": 0}):

        vet.append(doc)

    return vet



importaBase()
#consultaBase()

#a = cotVisuPrin()
#print(a)
