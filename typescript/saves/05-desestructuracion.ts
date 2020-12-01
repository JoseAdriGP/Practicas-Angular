(()=>{
    
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    //Desestructuración de objetos en variables
    const extraer = (avenger: any) => {
        const {nombre, poder, clave} = avenger;

        console.log(nombre);
        console.log(poder);
    }
    
    //Desestructuración de objetos en parametros
    const extraer2 = ({nombre,poder}: any) => {

        console.log(nombre);
        console.log(poder);
    }
    
    //extraer(avenger);
    //extraer2(avenger);

    //Desestructuración de arreglos
    //(aquí si es importante el orden)
    const avengers: string[] =['Thor', 'Ironman', 'Viuda Negra', "Ojo de Alcón", 'Spiderman'];

    const [dios, hombre, , , araña] = avengers;

    //console.log(dios);
    //console.log(hombre);
    //console.log(araña);

    const extraerArr = ([dios, hombre, , , araña]: string[]) =>{
        console.log(dios);
        console.log(hombre);
        console.log(araña);
    }

    extraerArr(avengers);


})();



