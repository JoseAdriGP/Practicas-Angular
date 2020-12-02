(()=>{
    
    const wolverine = {
        nombreXmen: 'Logan',
        edad: 60
    }

    //Esta funcion falla si no hay propiedad definida como nombre y mostrará undefined
    const enviarMision = (xmen: any) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    enviarMision(wolverine);
    
    //En esta funcion se está espcificando que ha tiene que tener la propiedad nombreXmen
    const enviarMision2 = (xmen: {nombreXmen: string}) => {
        console.log(`Enviando a ${xmen.nombreXmen} a la misión`);
    }

    enviarMision2(wolverine);

    //Solución más cómoda: interfaces
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const ciclope: Xmen = {
        nombre: 'Scott',
        edad: 30
    }

    const enviarMision3 = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    enviarMision3(ciclope);

})();



