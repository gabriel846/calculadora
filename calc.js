function botao( num ) 
{
   var salvo =  document.calc.visor.value;
   document.calc.visor.value = salvo + num;
}

function reset() {
    var reset = document.calc.visor.value;
    document.calc.visor.value = "0";
}

function calcule() {

}