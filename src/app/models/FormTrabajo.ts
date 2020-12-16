import { Cita } from './Cita';

export class FormTrabajo {
    constructor(
        public jobFormId: string,
        public detail: string,
        public date: string,
        public appointment: Cita,
        public domainEvents: any,
    ) { }
}