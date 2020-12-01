(function(){

    function getEdad()
    {
        return 50+6-30;
    }

    const nombre = 'Adrian';
    const edad = 30;
    const apellido = 'Garrido';

    const salida = `${nombre} ${apellido} ( ${edad} )`;
    const salida2 = `
    ${nombre}
    ${apellido}
    ( ${edad-5} )
    `;
    const salida3 = `( ${getEdad()} )`;
    console.log(salida);
    console.log(salida2);
    console.log(salida3);

})();



