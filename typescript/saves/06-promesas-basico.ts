(()=>{
    
    console.log('Inicio');

    const prom1 = new Promise( ( resolve, reject ) => {
        setTimeout(()=>{
            //resolve('Se terminó el timeout');
            reject('Se terminó el timeout');
        },1000);
    });

    prom1
        .then( mensaje => console.log( mensaje ))
        .catch( err => console.warn( err ));
    
    console.log('Fin');

})();



