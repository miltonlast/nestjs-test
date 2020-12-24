import { Schema } from 'mongoose';

export const ClienteSchema = new Schema({
    nombreCliente: { type: String, required: true },
    estadoCivil: { type: String, required: true },
    direccion: { type: String, required: true },
    email: { type: String, required: true },
    numeroTelefono: { type: String, required: true },
    cuentas: [{ type: Schema.Types.ObjectId, ref: 'TipoCuenta' }],
    servicios: {
        solicitudes: [{
            servicio: { type: Schema.Types.ObjectId, ref: 'Servicio' },
            estado: { type: Schema.Types.Number }
        }],
        serviciosObtenidos: [{
            servicio: { type: Schema.Types.ObjectId, ref: 'Servicio' }
        }]
    },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
}, { timestamps: true });