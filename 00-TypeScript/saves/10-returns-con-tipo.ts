(()=>{
    
    //TypeScript puede inferir el tipo
    const sumar = (a:number, b:number): number => a + b;

    const nombre = () => 'Hola mundo';


    //TypeScript no puede inferir el tipo
    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject) =>{
            resolve('Zacarías');
        });
    }

    obtenerSalario()
                    .then( a => console.log(a.toUpperCase()) )
                    .catch( err => console.warn(err) )

})();



