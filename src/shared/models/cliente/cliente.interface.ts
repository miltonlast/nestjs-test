import { Document } from 'mongoose';
import { ClienteSolicitudesServiciosObtenidosDTO } from './cliente-solicitudes-servicios-obtenidos.dto';

declare interface ICliente {
    nombreCliente: string,
    estadoCivil: string,
    direccion: string,
    email: string,
    numeroTelefono: string,
    cuentas: Array<string>,
    servicios: {
        solicitudes: {
            servicio: string,
            estado: number
        }[],
        serviciosObtenidos: {
            servicio: string
        }[]
    },
    categoria: string
}

export interface Cliente extends ICliente, Document { }