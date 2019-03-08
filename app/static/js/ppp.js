
$(document).ready(function() {
        $('.fixed').addClass('is-sticky');
        $('[data-toggle="tooltip"]').tooltip();

        var offset = $('#headerPPP').offset().top + 100;
        var $headerPPP = $('#headerPPP'); // guardar o elemento na memoria para melhorar performance
        $(document).on('scroll', function () {
            if (offset <= $(window).scrollTop()) {
                $headerPPP.addClass('fixar');
            } else {
                $headerPPP.removeClass('fixar');
            }
});
    });

/* JS dos Checkbox */
$('#checkAll').click(function(){
    var chkAll = document.getElementById('checkAll');
    var ckTrade = document.getElementById('trade');
    var ckConjuntura  = document.getElementById('conjuntura');
    var ckAAI  = document.getElementById('trade-aai');
    var ckMercados  = document.getElementById('mercados');
    var ckMercadosBS  = document.getElementById('mercados-bs');
    var ckNews  = document.getElementById('news');
    var ckNewsBS  = document.getElementById('news-bs');
    var ckAnalises  = document.getElementById('analises');

    if(chkAll.checked == true){

        ckTrade.checked = true;
        ckConjuntura.checked = true;
        ckAAI.checked = true;
        ckMercados.checked = true;
        ckMercadosBS.checked = true;
        ckNews.checked = true;
        ckNewsBS.checked = true;
        ckAnalises.checked = true;

    } else {

        ckTrade.checked = false;
        ckConjuntura.checked = false;
        ckAAI.checked = false;
        ckMercados.checked = false;
        ckMercadosBS.checked = false;
        ckNews.checked = false;
        ckNewsBS.checked = false;
        ckAnalises.checked = false;
    }
});

 $('#trade').click(function() {
        
        var ckTrade = document.getElementById('trade');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#trade-aai').click(function() {
        
        var ckTrade = document.getElementById('trade-aai');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#conjuntura').click(function() {
        
        var ckTrade = document.getElementById('conjuntura');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#mercados-bs').click(function() {
        
        var ckTrade = document.getElementById('mercados-bs');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#mercados').click(function() {
        
        var ckTrade = document.getElementById('mercados');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#news-bs').click(function() {
        
        var ckTrade = document.getElementById('news-bs');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#news').click(function() {
        
        var ckTrade = document.getElementById('news');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#analises').click(function() {
         
        var ckTrade = document.getElementById('analises');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });

/* Funções para controlar movimentação dos icones da callopse*/

function iconNoticia(){
    

    if($(document.getElementById("Noticias-collapse")).hasClass('show')){
        $('#iconN').removeClass('fa-angle-down');
        $('#iconN').addClass('fa-angle-right');
        $("#n-trade").show();
        $("#n-conjuntura").show();
        $("#n-mercados").show();
        $("#n-news").show();
        $("#n-analises").show();
    } else{
        $('#iconN').removeClass('fa-angle-right');
        $('#iconN').addClass('fa-angle-down');
        $("#n-trade").hide();
        $("#n-conjuntura").hide();
        $("#n-mercados").hide();
        $("#n-news").hide();
        $("#n-analises").hide();
    }
}

function iconNoticiaContri(){
    if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
        $('#iconNContri').removeClass('fa-angle-down');
        $('#iconNContri').addClass('fa-angle-right');
        $("#n-ctbd-trade").show();
        $("#n-ctbd-conjuntura").show();
        $("#n-ctbd-mercados").show();
        $("#n-ctbd-news").show();
        $("##n-ctbd-analises").show();
    } else{
        $('#iconNContri').removeClass('fa-angle-right');
        $('#iconNContri').addClass('fa-angle-down');
        $("#n-ctbd-trade").hide();
        $("#n-ctbd-conjuntura").hide();
        $("#n-ctbd-mercados").hide();
        $("#n-ctbd-news").hide();
        $("#n-ctbd-analises").hide();
    }
}

function iconCotacao(){
    if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
        $('#iconCotacao').removeClass('fa-angle-down');
        $('#iconCotacao').addClass('fa-angle-right');
        $("#c-trade").show();
        $("#c-conjuntura").show();
        $("#c-mercados").show();
        $("#c-news").show();
        $("#c-analises").show();

    } else{
        $('#iconCotacao').removeClass('fa-angle-right');
        $('#iconCotacao').addClass('fa-angle-down');
        $("#c-trade").hide();
        $("#c-conjuntura").hide();
        $("#c-mercados").hide();
        $("#c-news").hide();
        $("#c-analises").hide();
    }
}

function iconCotacaoB3(){
    if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
        $('#iconCB3').removeClass('fa-angle-down');
        $('#iconCB3').addClass('fa-angle-right');
        $("#c-b3-trade").show();
        $("#c-b3-conjuntura").show();
        $("#c-b3-mercados").show();
        $("#c-b3-news").show();
        $("#c-b3-analises").show();
    } else{
        $('#iconCB3').removeClass('fa-angle-right');
        $('#iconCB3').addClass('fa-angle-down');
        $("#c-b3-trade").hide();
        $("#c-b3-conjuntura").hide();
        $("#c-b3-mercados").hide();
        $("#c-b3-news").hide();
        $("#c-b3-analises").hide();
    }
}

function iconCotacaoContri(){
    if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
        $('#iconCContri').removeClass('fa-angle-down');
        $('#iconCContri').addClass('fa-angle-right');
        $("#c-ctbd-trade").show();
        $("#c-ctbd-conjuntura").show();
        $("#c-ctbd-mercados").show();
        $("#c-ctbd-news").show();
        $("#c-ctbd-analises").show();
    } else{
        $('#iconCContri').removeClass('fa-angle-right');
        $('#iconCContri').addClass('fa-angle-down');
        $("#c-ctbd-trade").hide();
        $("#c-ctbd-conjuntura").hide();
        $("#c-ctbd-mercados").hide();
        $("#c-ctbd-news").hide();
        $("#c-ctbd-analises").hide();
    }
}

function iconAddon(){
    if($(document.getElementById("Addon-collapse")).hasClass('show')){
        $('#iconAddon').removeClass('fa-angle-down');
        $('#iconAddon').addClass('fa-angle-right');
        $("#ad-trade").show();
        $("#ad-conjuntura").show();
        $("#ad-mercados").show();
        $("#ad-news").show();
        $("#ad-analises").show();
    } else{
        $('#iconAddon').removeClass('fa-angle-right');
        $('#iconAddon').addClass('fa-angle-down');
        $("#ad-trade").hide();
        $("#ad-conjuntura").hide();
        $("#ad-mercados").hide();
        $("#ad-news").hide();
        $("#ad-analises").hide();
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