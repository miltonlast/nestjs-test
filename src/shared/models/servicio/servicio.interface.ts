import { Document } from 'mongoose';

declare interface IServicio {
    descripcion: string
}

export interface Servicio extends IServicio, Document { }