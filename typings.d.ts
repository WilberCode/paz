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