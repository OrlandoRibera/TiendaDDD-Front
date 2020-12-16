export class OrdenServicio {
    constructor(
        public ServiceType: number,
        public Price: number,
        public ServiceOrder: any,
        public Description: string,
        public AlternativeAddress: string,
        public Products: []
    ) { }
}
