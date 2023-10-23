type DataEntry = {
    img: string;
    lat: number;
    long: number;
    nombre: string;
}
type DataEntryFiltered = {
    latitude: number;
    longitude: number;
    zoom?: number; 
}

interface FormPropsContact  {
    nombre:string;
    apellido:string;
    correo:string;
    celular:string;
    mensaje:string;
}