from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:admin@cluster0-umdst.mongodb.net/test?retryWrites=true")
db = client.BasePPPDigital


class Cotacao():

    def nivel2(self, param):

        self.param = param
        param1 = param.split('-')
        coll = db.Cotacao
        # print(param1)
        # print(param1[0])
        # print(param1[1])
        # print(type(param1[2]))

        if param1[2] == "1":
            pipeline = [
                {
                    "$match": {
                        "fonte_ativo": param1[0],
                        # "inf_disp": param1[1]
                    }
                },
                {
                    "$group": {
                        "_id": "$fonte_ativo",
                        "inf_dispo": {"$addToSet": "$inf_disp"},
                        "mercados": {"$addToSet": "$merc_ativo"},
                        "tp_instr": {"$addToSet": "$classe_ativo"}
                    },

                }
            ]
            vet = list(coll.aggregate(pipeline))
            # print(vet)
            return vet

        elif param1[2] == "2":

            pipeline = [
                {
                    "$match": {
                        "fonte_ativo": param1[0],
                        "merc_ativo": param1[1]
                    }
                },
                {
                    "$group": {
                        "_id": "$fonte_ativo",
                        "inf_dispo": {"$addToSet": "$inf_disp"},
                        "mercados": {"$addToSet": "$merc_ativo"},
                        "tp_instr": {"$addToSet": "$classe_ativo"}
                    },
                }
            ]

            vet = list(coll.aggregate(pipeline))
            # print(vet)
            return vet

        elif param1[2] == "3":

            pipeline = [
                {
                    "$match": {
                        "fonte_ativo": param1[0],
                        "classe_ativo": param1[1]
                    }
                },
                {
                    "$group": {
                        "_id": "$fonte_ativo",
                        "inf_dispo": {"$addToSet": "$inf_disp"},
                        "mercados": {"$addToSet": "$merc_ativo"},
                        "tp_instr": {"$addToSet": "$classe_ativo"}
                    },
                }
            ]

            vet = list(coll.aggregate(pipeline))
            print(vet)
            return vet

    def nivel3(self, param):

        self.param = param
        param1 = param.split('-')
        results = []
        # print(param1)
        coll = db.Cotacao
        # print(param1[0])
        # print(param1[1])
        # print(param1[2])

        if param1[3] == "1" and param1[4] == "2":
            results = coll.find({'fonte_ativo': param1[0], 'inf_disp': param1[1], 'merc_ativo': param1[2]},
                                {'_id': 0, 'tipo': 0, 'cod_ativo': 0})

        elif param1[3] == "1" and param1[4] == "3":
            results = coll.find({'fonte_ativo': param1[0], 'inf_disp': param1[1], 'classe_ativo': param1[2]})

        elif param1[3] == "2" and param1[4] == "1":
            results = coll.find({'fonte_ativo': param1[0], 'merc_ativo': param1[1], 'inf_disp': param1[2]})

        elif param1[3] == "2" and param1[4] == "3":
            results = coll.find({'fonte_ativo': param1[0], 'merc_ativo': param1[1], 'classe_ativo': param1[2]},
                                {'_id': 0, 'tipo': 0, 'cod_ativo': 0, })

        elif param1[3] == "3" and param1[4] == "1":
            results = coll.find({'fonte_ativo': param1[0], 'classe_ativo': param1[1], 'inf_disp': param1[2]})

        elif param1[3] == "3" and param1[4] == 2:
            results = coll.find({'fonte_ativo': param1[0], 'classe_ativo': param1[1], 'merc_ativo': param1[2]})

        return list(results)

    def cotVisuPrin(self):

        coll = db.Cotacao
        pipeline = [
            {
                "$group": {"_id": "$fonte_ativo",
                           "inf_dispo": {"$addToSet": "$inf_disp"},
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
                "$match": {"$text": {"$search": texto}}
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

        vet = []  # list(coll.aggregate(pipeline))

        if vet == []:
            print('/*.' + texto + '*./')
            pipeline = [
                {
                    "$match": {"fonte": {"$regex": '/' + texto + '*./', "$options": "i"}}  # "/.*cba.*/"}
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

    def verAtivos(self, param):
        self.param = param
        param1 = param.split('-')
        results = []
        coll = db.Cotacao

        if len(param1) == 3:
            if param1[2] == 1:
                results = coll.find({'fonte_ativo': param1[0], 'inf_disp': param1[1]},
                                    {'_id': 0,'cod_ativo': 1, 'cod_ativo_bolsa': 1,'desc_ativo':1 })
            elif param1[2] == 2:
                results = coll.find({'fonte_ativo': param1[0], 'merc_ativo': param1[1]},
                                    {'_id': 0, 'cod_ativo': 1, 'cod_ativo_bolsa': 1, 'desc_ativo': 1})
            elif param1[2] == 3:
                results = coll.find({'fonte_ativo': param1[0], 'classe_ativo': param1[1]},
                                    {'_id': 0, 'cod_ativo': 1, 'cod_ativo_bolsa': 1, 'desc_ativo': 1})

        return results


a = Cotacao().cotVisuPrin()

# print(a)
