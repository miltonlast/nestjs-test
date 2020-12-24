import { Schema } from 'mongoose';

export const CategoriaSchema = new Schema({
    descripcion: { type: String, required: true }
}, { timestamps: true });