from flask import render_template, request, jsonify
from app import app
from app.controllers.auxiliar import Cotacao
from app.models.Form import FiltroCot


@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')


@app.route('/cotacao', methods=('GET' , 'POST'))
def cotacao():#(merc='', TpInst=''):

        # opções do radiobotton que controla a visualização ( data['rdPesquisaPor'] ):
        # 1 : Por Fonte (Fonte, Mercado, Classe Ativo)
        # 2 : Por Mercados (Mercado, Fonte, Classe Ativo)
        # 3 : Por Classe de Ativo (Classe Ativo, Mercado, Fonte)

        coll = Cotacao()
        form = FiltroCot()
        results = coll.cotVisuPrin()
        print(results)

        if request.method == 'POST':
                opc = data['rdPesquisaPor']
                print(data['rdPesquisaPor'])
                texto = data['txtBusca']
                print(texto)
                # print(TpInst)
                # print(data['tp_instr'])
                results = Cotacao().buscaAtivo(texto)
                print(results)

                return render_template('n2_cotacao.html', results=results, form=form, opc=opc)

        return render_template('cotacao_v3.html', results=results, form=form)

@app.route('/cotVisuPrin')
def cotVisuPrin():
        coll = Cotacao()
        results = coll.cotVisuPrin()

        return jsonify(data=results)

@app.route('/nivel2/<param>', methods=('GET', 'POST'))
def n2(param):
        coll = Cotacao()

        results = coll.cotVisuPrin()
        teste = coll.nivel2(param)
        param1= param.split('-')
        ref=''
        if param1[2]=='1':
                ref = 'Fonte: '+param1[0]+' Inf. Disponível: '+param1[1]

        elif param1[2]=='2':
                ref = 'Fonte: '+param1[0]+'  Mercado: '+param1[1]

        elif param1[2]==3:
                ref = 'Fonte: ' + param1[0] + ' Classe Ativo: ' + param1[1]

        form = FiltroCot()
        data = form.data
        print(teste)

        if request.method == 'POST':
                opc = data['rdPesquisaPor']
                print(data['rdPesquisaPor'])
                texto = data['txtBusca']
                print(texto)
                # print(TpInst)
                # print(data['tp_instr'])
                results = Cotacao().buscaAtivo(texto)
                print(results)

                return render_template('n2_cotacao.html', results=results, form=form, opc=opc)

        return render_template('n2_cotacao.html', results=teste, form=form, param1=param1)


@app.route('/nivel3/<param>', methods=('GET', 'POST'))
def n3(param):
        coll = Cotacao()

        #results = coll.cotVisuPrin()
        teste = coll.nivel3(param)
        param1= param.split('-')

        form = FiltroCot()
        data = form.data
        print(teste)

        #if request.method == 'POST':
        #        opc = data['rdPesquisaPor']
        #        print(data['rdPesquisaPor'])
        #        texto = data['txtBusca']
        #        print(texto)
        #        # print(TpInst)
        #        # print(data['tp_instr'])
        #        results = Cotacao().buscaAtivo(texto)
        #        print(results)

        #        return render_template('n3_cotacao.html', results=results, form=form, opc=opc)

        return render_template('n3_cotacao.html', results=teste, form=form, param1=param1)


@app.route('verAtivos/<param>', methods=('GET', 'POST'))
def verAtivos(param):
        coll = Cotacao()
        results= coll.verAtivos(param)
        param1 = param.split('-')
        return render_template('verAtivos.html', results=results, param1=param1)


 ####       


@app.route('/bpro-terminal', methods=('GET' , 'POST'))
def bpro_terminal():
        return render_template('bcpro.html')

@app.route('/bpro-web', methods=('GET' , 'POST'))
def bpro_web():
        return render_template('bcpro.html')

@app.route('/bpro-wallboard', methods=('GET' , 'POST'))
def bpro_wallboard():
        return render_template('bcpro.html')

@app.route('/bagro-terminal', methods=('GET' , 'POST'))
def bagro_terminal():
        return render_template('bcagro.html')

@app.route('/bagro-web', methods=('GET' , 'POST'))
def bagro_web():
        return render_template('bcagro.html')

@app.route('/bagro-wallboard', methods=('GET' , 'POST'))
def bagro_wallboard():
        return render_template('bcagro.html')


@app.route('/bpol', methods=('GET' , 'POST'))
def bpol():
        return render_template('bpro.html')

@app.route('/TradingNews', methods=('GET' , 'POST'))
def tradingnews():
        return render_template('bpro.html')



