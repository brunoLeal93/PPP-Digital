from flask import render_template, request, jsonify
from app import app
from app.controllers.auxiliar import Cotacao
from app.models.Form import FiltroCot


@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')

#@app.route('/cotacao/<param>', methods=('GET' , 'POST'))
#@app.route('/cotacao/<TpInst>', methods=('GET' , 'POST'))
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

        #print(param)


        return render_template('cotacao_v3.html', results=results, form=form)


@app.route('/nivel2/<param>', methods=('GET', 'POST'))
def n2(param):
        coll = Cotacao()

        results = coll.cotVisuPrin()
        teste = coll.nivel2(param)
        form = FiltroCot()
        data = form.data
        #print(param)

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

        return render_template('n2_cotacao.html', results=teste, form=form)


@app.route('/cotVisuPrin')
def cotVisuPrin():
        coll = Cotacao()
        results = coll.cotVisuPrin()

        return jsonify(data=results)

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



