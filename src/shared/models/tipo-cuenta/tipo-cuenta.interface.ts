import { Document } from 'mongoose';

declare interface ITipoCuenta {
    descripcion: string
}

export interface TipoCuenta extends ITipoCuenta, Document { }