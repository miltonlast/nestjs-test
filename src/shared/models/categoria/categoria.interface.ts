import { Document } from 'mongoose';

declare interface ICategoria {
    descripcion: string
}

export interface Categoria extends ICategoria, Document { }