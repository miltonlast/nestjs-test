import { Schema } from 'mongoose';

export const TipoCuentaSchema = new Schema({
    descripcion: { type: String, required: true }
}, { timestamps: true });