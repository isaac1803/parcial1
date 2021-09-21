var editando=false;



function capturarEnvio(){
    var nodoContenedorForm = document.getElementById('contenedorForm');
    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
        '<form name = "formulario" action="Resultado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
        '<input type="hidden" name="nombres" value="'+document.querySelector('#nombres').value+'">'+
        '<input type="hidden" name="correo" value="'+document.querySelector('#correo').value+'">'+
        '<input type="hidden" name="telefono" value="'+document.querySelector('#telefono').value+'">'+
        '<input type="hidden" name="gustos" value="'+document.querySelector('#gustos').value+'">'+
        '<select name="ok"><option value="'+document.querySelector('#ok').value+'">'+
        '<input class="boton" type = "submit" value="enviar"> <input class="boton" type="reset" value="Cancelar">';
    document.formulario.submit();
}

function cancelar(){
window.location.reload();
}

function carga() {
    var nom = getQueryVariable('nombres'); 
    var corr = getQueryVariable('correo');
    var tel = getQueryVariable('telefono'); 
    var gust = getQueryVariable('gustos'); 
    var ok = getQueryVariable('ok');

    document.getElementById('alim').innerHTML = nom;
    document.getElementById('cal').innerHTML = corr;
    document.getElementById('gra').innerHTML = tel;
    document.getElementById('pro').innerHTML = gust;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
 }