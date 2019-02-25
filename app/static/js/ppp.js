function iconNoticia(){
    if($(document.getElementById("Noticias-collapse")).hasClass('show')){
        $('#iconN').removeClass('fa-angle-down');

        $('#iconN').addClass('fa-angle-right');

        $('#icon').addClass('fa-angle-right');

    } else{
        $('#iconN').removeClass('fa-angle-right');
        $('#iconN').addClass('fa-angle-down');
    }
}

function iconNoticiaContri(){
    if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
        $('#iconNContri').removeClass('fa-angle-down');
        $('#iconNContri').addClass('fa-angle-right');
    } else{
        $('#iconNContri').removeClass('fa-angle-right');
        $('#iconNContri').addClass('fa-angle-down');
    }
}

function iconCotacao(){
    if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
        $('#iconCotacao').removeClass('fa-angle-down');
        $('#iconCotacao').addClass('fa-angle-right');
    } else{
        $('#iconCotacao').removeClass('fa-angle-right');
        $('#iconCotacao').addClass('fa-angle-down');
    }
}

function iconCotacaoB3(){
    if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
        $('#iconCB3').removeClass('fa-angle-down');
        $('#iconCB3').addClass('fa-angle-right');
    } else{
        $('#iconCB3').removeClass('fa-angle-right');
        $('#iconCB3').addClass('fa-angle-down');
    }
}

function iconCotacaoContri(){
    if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
        $('#iconCContri').removeClass('fa-angle-down');
        $('#iconCContri').addClass('fa-angle-right');
    } else{
        $('#iconCContri').removeClass('fa-angle-right');
        $('#iconCContri').addClass('fa-angle-down');
    }
}

function iconAddon(){
    if($(document.getElementById("Addon-collapse")).hasClass('show')){
        $('#iconAddon').removeClass('fa-angle-down');
        $('#iconAddon').addClass('fa-angle-right');
    } else{
        $('#iconAddon').removeClass('fa-angle-right');
        $('#iconAddon').addClass('fa-angle-down');
    }
}

function iconModulos(){
    if($(document.getElementById("Addon-mod-collapse")).hasClass('show')){
        $('#iconModulos').removeClass('fa-angle-down');
        $('#iconModulos').addClass('fa-angle-right');
    } else{
        $('#iconModulos').removeClass('fa-angle-right');
        $('#iconModulos').addClass('fa-angle-down');
    }
}

function iconAnaFund(){
    if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
        $('#iconAnaFund').removeClass('fa-angle-down');
        $('#iconAnaFund').addClass('fa-angle-right');
    } else{
        $('#iconAnaFund').removeClass('fa-angle-right');
        $('#iconAnaFund').addClass('fa-angle-down');
    }
}

function iconModNoticias(){
    if($(document.getElementById("Addon-n-collapse")).hasClass('show')){
        $('#iconModNoticias').removeClass('fa-angle-down');
        $('#iconModNoticias').addClass('fa-angle-right');
    } else{
        $('#iconModNoticias').removeClass('fa-angle-right');
        $('#iconModNoticias').addClass('fa-angle-down');
    }
}

function iconModNDJN(){
    if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
        $('#iconModNDJN').removeClass('fa-angle-down');
        $('#iconModNDJN').addClass('fa-angle-right');
    } else{
        $('#iconModNDJN').removeClass('fa-angle-right');
        $('#iconModNDJN').addClass('fa-angle-down');
    }
}


$(document).ready(function() {
        $('.fixed').addClass('is-sticky');
    

    });
    
    
    

    $('#trade').click(function() {
        $("#trade-lb").toggle(this.checked);
        $("#n-trade").toggle(this.checked);
        $("#n-aenews-trade").toggle(this.checked);
        $("#n-empset-trade").toggle(this.checked);
        $("#c-trade").toggle(this.checked);
        $("#c-a-trade").toggle(this.checked);
        $("#c-a-bov-trade").toggle(this.checked);
        $("#c-a-nyse-trade").toggle(this.checked);
        $("#c-a-nyseamex-trade").toggle(this.checked);
        $("#c-d-trade").toggle(this.checked);
        $("#c-d-cbot-trade").toggle(this.checked);
        $("#f-trade").toggle(this.checked);
        $("#f-chart-trade").toggle(this.checked);
        $("#f-linkexcel-trade").toggle(this.checked);
    });
    $('#trade-aai').click(function() {
        $("#trade-aai-lb").toggle(this.checked);
        $("#n-trade-aai").toggle(this.checked);
        $("#n-aenews-trade-aai").toggle(this.checked);
        $("#n-empset-trade-aai").toggle(this.checked);
        $("#c-trade-aai").toggle(this.checked);
        $("#c-a-trade-aai").toggle(this.checked);
        $("#c-a-bov-trade-aai").toggle(this.checked);
        $("#c-a-nyse-trade-aai").toggle(this.checked);
        $("#c-a-nyseamex-trade-aai").toggle(this.checked);
        $("#c-d-trade-aai").toggle(this.checked);
        $("#c-d-cbot-trade-aai").toggle(this.checked);
        $("#f-trade-aai").toggle(this.checked);
        $("#f-chart-trade-aai").toggle(this.checked);
        $("#f-linkexcel-trade-aai").toggle(this.checked);
    });
    $('#conjuntura').click(function() {
        $("#conjuntura-lb").toggle(this.checked);
        $("#n-conjuntura").toggle(this.checked);
        $("#n-aenews-conjuntura").toggle(this.checked);
        $("#n-empset-conjuntura").toggle(this.checked);
        $("#c-conjuntura").toggle(this.checked);
        $("#c-a-conjuntura").toggle(this.checked);
        $("#c-a-bov-conjuntura").toggle(this.checked);
        $("#c-a-nyse-conjuntura").toggle(this.checked);
        $("#c-a-nyseamex-conjuntura").toggle(this.checked);
        $("#c-d-conjuntura").toggle(this.checked);
        $("#c-d-cbot-conjuntura").toggle(this.checked);
        $("#f-conjuntura").toggle(this.checked);
        $("#f-chart-conjuntura").toggle(this.checked);
        $("#f-linkexcel-conjuntura").toggle(this.checked);
    });
    $('#mercados-bs').click(function() {
        $("#mercados-bs-lb").toggle(this.checked);
        $("#n-mercados-bs").toggle(this.checked);
        $("#n-aenews-mercados-bs").toggle(this.checked);
        $("#n-empset-mercados-bs").toggle(this.checked);
        $("#c-mercados-bs").toggle(this.checked);
        $("#c-a-mercados-bs").toggle(this.checked);
        $("#c-a-bov-mercados-bs").toggle(this.checked);
        $("#c-a-nyse-mercados-bs").toggle(this.checked);
        $("#c-a-nyseamex-mercados-bs").toggle(this.checked);
        $("#c-d-mercados-bs").toggle(this.checked);
        $("#c-d-cbot-mercados-bs").toggle(this.checked);
        $("#f-mercados-bs").toggle(this.checked);
        $("#f-chart-mercados-bs").toggle(this.checked);
        $("#f-linkexcel-mercados-bs").toggle(this.checked);
    });
    $('#mercados').click(function() {
        $("#mercados-lb").toggle(this.checked);
        $("#n-mercados").toggle(this.checked);
        $("#n-aenews-mercados").toggle(this.checked);
        $("#n-empset-mercados").toggle(this.checked);
        $("#c-mercados").toggle(this.checked);
        $("#c-a-mercados").toggle(this.checked);
        $("#c-a-bov-mercados").toggle(this.checked);
        $("#c-a-nyse-mercados").toggle(this.checked);
        $("#c-a-nyseamex-mercados").toggle(this.checked);
        $("#c-d-mercados").toggle(this.checked);
        $("#c-d-cbot-mercados").toggle(this.checked);
        $("#f-mercados").toggle(this.checked);
        $("#f-chart-mercados").toggle(this.checked);
        $("#f-linkexcel-mercados").toggle(this.checked);
    });
    $('#news-bs').click(function() {
        $("#news-bs-lb").toggle(this.checked);
        $("#n-news-bs").toggle(this.checked);
        $("#n-aenews-news-bs").toggle(this.checked);
        $("#n-empset-news-bs").toggle(this.checked);
        $("#c-news-bs").toggle(this.checked);
        $("#c-a-news-bs").toggle(this.checked);
        $("#c-a-bov-news-bs").toggle(this.checked);
        $("#c-a-nyse-news-bs").toggle(this.checked);
        $("#c-a-nyseamex-news-bs").toggle(this.checked);
        $("#c-d-news-bs").toggle(this.checked);
        $("#c-d-cbot-news-bs").toggle(this.checked);
        $("#f-news-bs").toggle(this.checked);
        $("#f-chart-news-bs").toggle(this.checked);
        $("#f-linkexcel-news-bs").toggle(this.checked);
    });
    $('#news').click(function() {
        $("#news-lb").toggle(this.checked);
        $("#n-news").toggle(this.checked);
        $("#n-aenews-news").toggle(this.checked);
        $("#n-empset-news").toggle(this.checked);
        $("#c-news").toggle(this.checked);
        $("#c-a-news").toggle(this.checked);
        $("#c-a-bov-news").toggle(this.checked);
        $("#c-a-nyse-news").toggle(this.checked);
        $("#c-a-nyseamex-news").toggle(this.checked);
        $("#c-d-news").toggle(this.checked);
        $("#c-d-cbot-news").toggle(this.checked);
        $("#f-news").toggle(this.checked);
        $("#f-chart-news").toggle(this.checked);
        $("#f-linkexcel-news").toggle(this.checked);
    });
    $('#analises').click(function() {
         $("#ad-analises").toggle(this.checked);
         $("#ad-mod-af-analises").toggle(this.checked);
         $("#ad-mod-af-capabe-analises").toggle(this.checked);
         $("#ad-mod-af-capabefech-analises").toggle(this.checked);
         $("#ad-mod-agro-analises").toggle(this.checked);
         $("#ad-mod-analises").toggle(this.checked);
         $("#ad-mod-pol-analises").toggle(this.checked);
         $("#ad-n-analises").toggle(this.checked);
         $("#ad-n-arko-analises").toggle(this.checked);
         $("#ad-n-bdm-analises").toggle(this.checked);
         $("#ad-n-cepea-analises").toggle(this.checked);
         $("#ad-n-climatempo-analises").toggle(this.checked);
         $("#ad-n-djn-analises").toggle(this.checked);
         $("#ad-n-djn-cn-analises").toggle(this.checked);
         $("#ad-n-djn-enn-analises").toggle(this.checked);
         $("#ad-n-djn-eqn-analises").toggle(this.checked);
         $("#ad-n-djn-fn-analises").toggle(this.checked);
         $("#ad-n-nms-analises").toggle(this.checked);
         $("#ad-n-npec-analises").toggle(this.checked);
         $("#ad-n-pol-analises").toggle(this.checked);
         $("#ad-n-tenon-analises").toggle(this.checked);
         $("#analises-lb").toggle(this.checked);
         $("#c-analises").toggle(this.checked);
         $("#c-b3-bmf-analises").toggle(this.checked);
         $("#c-b3-bov-analises").toggle(this.checked);
         $("#c-cbot-analises").toggle(this.checked);
         $("#c-cetip-analises").toggle(this.checked);
         $("#c-cme-analises").toggle(this.checked);
         $("#c-comex-analises").toggle(this.checked);
         $("#c-ctbd-cambio-analises").toggle(this.checked);
         $("#c-ctbd-cripto-analises").toggle(this.checked);
         $("#c-ctbd-rfixa-analises").toggle(this.checked);
         $("#c-forward-analises").toggle(this.checked);
         $("#c-fundanbima-analises").toggle(this.checked);
         $("#c-indcds-analises").toggle(this.checked);
         $("#c-indcepea-analises").toggle(this.checked);
         $("#c-indmundi-analises").toggle(this.checked);
         $("#c-ipe-analises").toggle(this.checked);
         $("#c-latibex-analises").toggle(this.checked);
         $("#c-metais-analises").toggle(this.checked);
         $("#c-moedasfull-analises").toggle(this.checked);
         $("#c-moedasmini-analises").toggle(this.checked);
         $("#c-nasdaq-analises").toggle(this.checked);
         $("#c-nybot-analises").toggle(this.checked);
         $("#c-nymex-analises").toggle(this.checked);
         $("#c-nyse-analises").toggle(this.checked);
         $("#c-taxasfull-analises").toggle(this.checked);
         $("#c-taxasmini-analises").toggle(this.checked);
         $("#c-titpubanbima-analises").toggle(this.checked);
         $("#c-tresuaries-analises").toggle(this.checked);
         $("#n-aenews-analises").toggle(this.checked);
         $("#n-analises").toggle(this.checked);
         $("#n-artigos-analises").toggle(this.checked);
         $("#n-bctv-analises").toggle(this.checked);
         $("#n-cadnewspaper-analises").toggle(this.checked);
         $("#n-colunistas-analises").toggle(this.checked);
         $("#n-conjfin-analises").toggle(this.checked);
         $("#n-conjneg-analises").toggle(this.checked);
         $("#n-ctbd-agbov-analises").toggle(this.checked);
         $("#n-ctbd-agcebds-analises").toggle(this.checked);
         $("#n-ctbd-agcnasenar-analises").toggle(this.checked);
         $("#n-ctbd-agstj-analises").toggle(this.checked);
         $("#n-ctbd-ceagesp-analises").toggle(this.checked);
         $("#n-ctbd-ngo-analises").toggle(this.checked);
         $("#n-ctbd-relagricolas-analises").toggle(this.checked);
         $("#n-ctbd-relcriptomoedas-analises").toggle(this.checked);
         $("#n-ctbd-relmacro-analises").toggle(this.checked);
         $("#n-ctbd-relresearch-analises").toggle(this.checked);
         $("#n-empset-analises").toggle(this.checked);
         $("#n-projecoes-analises").toggle(this.checked);
         $("#n-release-analises").toggle(this.checked);

    });