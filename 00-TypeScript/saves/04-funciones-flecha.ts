(function(){

    //Ejemplos de definición de funciones
    let miFuncion = function(a:string)
    {
        return a.toUpperCase();
    }

    const miFuncionConstante = function(a:string)
    {
        return a.toUpperCase();
    }

    const miFuncionF = (a: string ) => {
        return a.toUpperCase();
    }

    const miFuncionF2 = (a: string ) => a.toUpperCase();

    //Más ejemplos de definición de funciones
    const sumaN = function(a: number, b: number)
    {
        return a + b;
    }

    const sumaF = (a: number, b: number) => {
        return a+b;
    };

    const sumaF2 = (a: number, b: number) => a+b;

    //Ejemplo donde la función tradicional da problemas
    const hulk ={
        nombre: 'Hulk',
        smash(){
            //Este caso falla porque las funciones tradicionales crean su propio ámbito
            //setTimeout(function(){
            //    console.log(`${this.nombre} smash!!!!`);
            //},1000);
            
            //La función de flecha no sobreescribe, por lo que podemos llamar a this.nombre
            setTimeout(() =>{
                console.log(`${this.nombre} smash!!!!`);
            },1000);
        }
    }

    hulk.smash();

})();



