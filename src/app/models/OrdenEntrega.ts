export class OrdenEntrega {
    constructor(
        public id: string,
        public nombreCliente: string,
        public telefono: string,
        public latitudDestino: string,
        public longitudDestino: string,
        public items: any[]
    ) { }
}