import { Schema } from 'mongoose';

export const ServicioSchema = new Schema({
    descripcion: { type: String, required: true }
}, { timestamps: true });