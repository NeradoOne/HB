//Declaración de variables
var nombreUsuario = 'Marcos';
var saldoCuenta = 15000;
var limiteExtraccion = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet= 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var password = '1234';

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion()
}


//Funciones que tenes que completar 
function cambiarLimiteDeExtraccion() {
    
    var lim = limiteExtraccion;
    limiteExtraccion = parseInt(prompt('Ingrese el nuevo limite de extacción: $'));
    if (isNaN(limiteExtraccion) || limiteExtraccion<=0 ){
        alert('Favor ingresar monto en numeros')
        cambiarLimiteDeExtraccion();
        return limiteExtraccion=lim;
    } else if (limiteExtraccion%100!=0){
        alert('Inrese solo multiplos de 100$.');
        cambiarLimiteDeExtraccion();
        return limiteExtraccion=lim;
    } actualizarLimiteEnPantalla();
    alert('Límite Anterior:\n' + lim+'$' +'\nLímite Actual:\n' + limiteExtraccion+'$');
}

function extraerDinero() {
    var dinero=parseInt(prompt('Ingrese monto a extraer: $'));
    if (isNaN(dinero) || dinero<0){
        alert('Favor ingresar monto en numeros')
        extraerDinero();
        return dinero=0;
    } else if (dinero>saldoCuenta){
        alert('Ingrese un monto menor a el Saldo actual.')
        extraerDinero ();
        return dinero=0;
    } else if (dinero>limiteExtraccion){
        alert('Limite de extracción por transacción alcanzado:\n Ingrese un monto inferior,\n ó aumente el límite de extracción.');
        extraerDinero();
        return dinero=0;
    } else if (dinero%100!=0){
        alert('Inrese solo multiplos de 100$.');
        extraerDinero();
        return dinero=0;
    }
    var saldoAnt= saldoCuenta;
    extraerSaldoCuenta(dinero);   
    alert('Saldo Anterior:\n' + saldoAnt+'$' +'\nExtracción de:\n'+ dinero+'$' +'\nSaldo Actual:\n' + saldoCuenta+'$');
    
}
function extraerSaldoCuenta(dinero) { 
    saldoCuenta = saldoCuenta - dinero;
    actualizarSaldoEnPantalla();
}

function depositarDinero(){
    var dinero=parseInt(prompt('Ingrese monto a depositar: $'));
    if (isNaN(dinero) || dinero<=0){
        alert('Favor ingresar monto en numeros')
        depositarDinero();
        return dinero=0;
    } else if (dinero%100!=0){
        alert('Inrese solo multiplos de 100$.');
        depositarDinero();
        return dinero=0;
    } var saldoAct = dinero+saldoCuenta;    
    alert('Saldo Anterior:\n' + saldoCuenta+'$' +'\nDeposito de:\n'+ dinero+'$' +'\nSaldo Actual:\n' + saldoAct+'$')
    agregarSaldoCuenta(dinero);
    
}
function agregarSaldoCuenta(dinero) { 
    saldoCuenta = saldoCuenta + dinero;
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    var servicio = 0;
    var opcion = prompt('Ingrese el numero que corresponda a el servicio que deseas pagar:\n1- Luz.\n2- Telefono\n3- Agua.\n4- Internet.')
    switch (opcion) {
        case '1': if(luz >saldoCuenta){
            alert('Saldo en cuenta inferior a el monto de servicio a pagar.')
            pagarServicio();
            } else {
            servicio = luz;
            saldoAct = saldoCuenta - servicio;
            alert('Has pagado el servicio de Luz.\nSaldo Anterior:\n' + saldoCuenta+'$' +'\nDebito de:\n'+ servicio+'$' +'\nSaldo Actual:\n' + saldoAct+'$');
            debitarServicio(servicio);
            }
            break;
        case '2': if (telefono > saldoCuenta){
            alert('Saldo en cuenta inferior a el monto de servicio a pagar.')
            pagarServicio();  
            } else {
            servicio = telefono;
            saldoAct = saldoCuenta - servicio;
            alert('Has pagado el servicio de Telefono.\nSaldo Anterior:\n' + saldoCuenta+'$' +'\nDebito de:\n'+ servicio+'$' +'\nSaldo Actual:\n' + saldoAct+'$');
            debitarServicio(servicio);
            }
            break;    
        case '3': if (agua > saldoCuenta){
            alert('Saldo en cuenta inferior a el monto de servicio a pagar.')
            pagarServicio();  
            } else {
            servicio = agua;
            saldoAct = saldoCuenta - servicio;
            alert('Has pagado el servicio de Agua.\nSaldo Anterior:\n' + saldoCuenta+'$' +'\nDebito de:\n'+ servicio+'$' +'\nSaldo Actual:\n' + saldoAct+'$');
            debitarServicio(servicio);
            }
            break; 
        case '4': if (internet > saldoCuenta){
            alert('Saldo en cuenta inferior a el monto de servicio a pagar.')
            pagarServicio();  
            } else {
            servicio = internet;
            saldoAct = saldoCuenta - servicio;
            alert('Has pagado el servicio de Internet.\nSaldo Anterior:\n' + saldoCuenta+'$' +'\nDebito de:\n'+ servicio+'$' +'\nSaldo Actual:\n' + saldoAct+'$');
            debitarServicio(servicio);
            }
            break; 
                
        default:
        alert('Ingrese numeros correspondientes a los servicios disponibles.')
        pagarServicio()
            break;
    }

}
function debitarServicio(servicio){
    saldoCuenta = saldoCuenta - servicio;
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
   var dinero = parseInt(prompt('Ingrese el monto a transferir: $'));
   if (isNaN(dinero) || dinero<0){
        alert('Favor ingresar monto en numeros')
        transferirDinero();
        return dinero=0;
    } else if (dinero>saldoCuenta){
        alert('Ingrese un monto menor a el Saldo actual.')
        transferirDinero ();
        return dinero=0;
    } else if (dinero%100!=0){
        alert('Inrese solo multiplos de 100$.');
        transferirDinero();
        return dinero=0;
    } else {
        var cuenta = parseInt(prompt('Ingrese cuenta amiga a transerir:'));
        if (cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2){
            var saldoAnt = saldoCuenta;
            extraerSaldoCuenta(dinero);   
            alert('Operacion Exitosa!\nSaldo Anterior:\n' + saldoAnt+'$' +'\nTransferencia por: '+dinero+'$'+', a cuenta N°: '+cuenta+'.\nSaldo Actual:\n' + saldoCuenta+'$');
        } else {
            alert('Solo se puede transferir a cuentas amigas.');
            transferirDinero()
        }
    }
}

function iniciarSesion() {
    var pass= prompt('Ingrese codigo de seguridad:')
    if (pass==password){
        alert('Bievenido '+nombreUsuario+', ya puedes comenzar a realizar operaciones.')
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();  
    } else { 
        saldoCuenta = 0;
        alert('Codigo incorrecto. Su saldo ha sido retenido por cuestiones de seguridad')
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}