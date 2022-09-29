function init_values(){
    let days = 5
    let credit = 100000
    
    if(
        localStorage.getItem('prestamo') &&
        localStorage.getItem('dias')
    ){
        credit =parseInt(localStorage.getItem('prestamo'))
        days = parseInt(localStorage.getItem('dias'))
    }
    let interes = parseInt(credit * (0.01878 / 30) * days)
    let seguro = parseInt((credit*24)/10000)
    let gestion = 60600
    let descuento = 0
    let descuento_mujer = 0 
    console.log(interes)
    let total_prestamo = parseInt(credit + interes + seguro + gestion -descuento)


    let valor_solicitado = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(credit.toFixed(0));
    let costo_total_prestamo = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(total_prestamo.toFixed(0));
    let valor_interes = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(interes.toFixed(0));
    let valor_seguro = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(seguro.toFixed(0));
    let valor_gestion = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(gestion.toFixed(0));
    let costo_descuento_mujer = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(descuento_mujer.toFixed(0));
    



    document.getElementById('credit_value').innerHTML = valor_solicitado
    document.getElementById('credit_days').innerHTML = days
    document.getElementById('action_credit_value').value = valor_solicitado
    document.getElementById('action_credit_days').value = days
    document.getElementById('interes').innerHTML = valor_interes
    document.getElementById('seguro').innerHTML = valor_seguro
    document.getElementById('gestion_tecnologica').innerHTML = valor_gestion
    document.getElementById('total_credit').innerHTML = costo_total_prestamo
    document.getElementById('descuento_mujer').innerHTML = costo_descuento_mujer

}
init_values()
function save_credit(prestamo,dias){
    localStorage.setItem('prestamo',prestamo);
    localStorage.setItem('dias',dias);
    location.href ="/dashboard";
}
function change_credit() {
    prestamo = parseInt(get_credit_value())
    days = parseInt(get_days_credit_value())
    
    interes = parseInt(prestamo * (0.01878 / 30) * get_days_credit_value())
    seguro = parseInt((prestamo*24)/10000)
    gestion = 60600
    descuento = 0
    descuento_mujer = 0    

    if(flexSwitchCheckChecked.checked){
        descuento_mujer = 6060
    }else{
        descuento_mujer = 0
    }
    
    if(get_descuento_mujer()){
        descuento=6060
    }
    console.log(get_descuento_mujer())
    total_prestamo = parseInt(prestamo + interes + seguro + gestion -descuento)
    console.log(total_prestamo)
    

    let valor_solicitado = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(prestamo.toFixed(0));
    let costo_total_prestamo = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(total_prestamo.toFixed(0));
    let valor_interes = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(interes.toFixed(0));
    let valor_seguro = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(seguro.toFixed(0));
    let valor_gestion = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(gestion.toFixed(0));
    let costo_descuento_mujer = new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 8,style: 'currency', currency: 'COP' }).format(descuento_mujer.toFixed(0));
    
    document.getElementById('credit_value').innerHTML = valor_solicitado
    document.getElementById('prestamo').innerHTML = valor_solicitado
    document.getElementById('credit_days').innerHTML = get_days_credit_value()
    document.getElementById('interes').innerHTML = valor_interes
    document.getElementById('seguro').innerHTML = valor_seguro
    document.getElementById('gestion_tecnologica').innerHTML = valor_gestion
    document.getElementById('total_credit').innerHTML = costo_total_prestamo
    document.getElementById('descuento_mujer').innerHTML = costo_descuento_mujer

    // 
   


}
// change_credit(1)


function get_credit_value() {
        return document.getElementById('action_credit_value').value
}

function get_days_credit_value() {
        return document.getElementById('action_credit_days').value
}

function get_descuento_mujer(){
return document.getElementById('flexSwitchCheckChecked').checked
}