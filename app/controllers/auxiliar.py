from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:admin@cluster0-umdst.mongodb.net/test?retryWrites=true")
db = client.BasePPPDigital

class Cotacao():

    def nivel2(self, param):
        self.param = param

        param1= param.split('-')

        print(param1)
        coll = db.Cotacao
        print(param1[0])
        print(param1[1])
        print(type(param1[2]))

        if param1[2] == "1":
            pipeline = [
                {
                    "$match": {
                        "fonte_ativo": param1[0],
                        #"inf_disp": param1[1]
                    }
                },
                {
                    "$group": {"_id": "$merc_ativo",
                               "tp_serv":{"$addToSet": "$rt_delay"},
                               "Serv": {"$addToSet": "$desc_serv"},
                               "tp_instr": {"$addToSet": "$classe_ativo"}},

                }
            ]
            vet = list(coll.aggregate(pipeline))
            print(vet)
            return vet

        if param1[2]=="2":

            pipeline = [
                {
                    "$match": {
                        "fonte_ativo": param1[0],
                        "merc_ativo": param1[1]
                    }
                },

                {
                    "$group": {"_id": "$fonte_ativo", "mercados": {"$addToSet": "$merc_ativo"},
                               "tp_instr": {"$addToSet": "$classe_ativo"}},

                }
            ]

            vet = list(coll.aggregate(pipeline))
            print(vet)
            return vet

    def cotVisuPrin(self):
        coll = db.Cotacao

        pipeline= [
            {
                "$group": {"_id": "$fonte_ativo",
                           "inf_dispo":{"$addToSet": "$inf_disp"},
                           "mercados": {"$addToSet": "$merc_ativo"},
                           "tp_instr": {"$addToSet": "$classe_ativo"}}
            }
        ]

        vet = list(coll.aggregate(pipeline))
        return vet

    def buscaAtivo(self, texto):
        self.texto = texto

        coll = db.Cotacao

        pipeline = [
            {
                "$match":{ "$text": { "$search": texto}}
            },
            {
                "$group": {
                    "_id": "$fonte",
                    "mercados": {"$addToSet": "$mercado"},
                    "tp_instr": {"$addToSet": "$tp_instrumento"},
                    "tickers": {"$addToSet": "$ticker"}
                }
            }
        ]

        vet = []#list(coll.aggregate(pipeline))

        if vet == []:
            print('/*.'+ texto + '*./')
            pipeline = [
                {
                    "$match": {"fonte": {"$regex": '/'+ texto + '*./', "$options": "i"}}# "/.*cba.*/"}
                },
                {
                    "$group": {
                        "_id": "$fonte",
                        "mercados": {"$addToSet": "$mercado"},
                        "tp_instr": {"$addToSet": "$tp_instrumento"},
                        "tickers": {"$addToSet": "$ticker"}
                    }
                }
            ]

            vet = list(coll.aggregate(pipeline))
            return vet
        return vet

a = Cotacao().cotVisuPrin()

#print(a)
