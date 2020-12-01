(function(){
    //Ejemplo de saludo por pantalla
    function saludar( nombre:string ) {
        console.table( 'Hola, ' + nombre ); // Hola Logan
    }
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar( wolverine.nombre );

    //Ejemplo variables
    var msg = 3;
    var msg = 5;
    let mensaje = 'Hola';
    const URL_SERVICIOS = 14;

    if(true)
    {
        let mensaje = "Mundo";
        var msg = 8;
    }

    console.log(mensaje);
    console.log(msg);
    console.log(URL_SERVICIOS);

    //Asignación. Es interesante bajar el código y ver los tipos
    let cualquiercosa;
    let buleano:boolean = true;
    let hoy: Date = new Date();

    cualquiercosa = msg;
    cualquiercosa = mensaje;
    cualquiercosa = URL_SERVICIOS;
    cualquiercosa = buleano;

    //Variables propias
    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre: 'Juan',
        edad: 40

    }

})();



