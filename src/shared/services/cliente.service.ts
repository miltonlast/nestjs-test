import { Cliente } from '@models/cliente/cliente.interface';
import { CreateClienteDTO } from '@models/cliente/create-cliente.dto';
import { UpdateClienteDTO } from '@models/cliente/update-cliente.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose, Schema } from 'mongoose';
import { type } from 'os';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoriaService } from './categoria.service';
import { ServicioService } from './servicio.service';
import { TipoCuentaService } from './tipo-cuenta.services';

@Injectable()
export class ClienteService {
    constructor(
        @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
        private readonly _categoriaService: CategoriaService,
        private readonly _servicioService: ServicioService,
        private readonly _tipoCuentaService: TipoCuentaService
    ) { }

    public findAll(): Observable<Array<Cliente>> {
        return from(
            this.clienteModel.find()
                .populate('categoria')
                .populate('cuentas')
                .populate('servicios.solicitudes.servicio')
                .populate('servicios.serviciosObtenidos.servicio')
                .exec()
        );
    }

    public getById(id: string): Observable<Cliente> {
        return from(this.clienteModel.findById(id).exec()).pipe(
            map(x => {
                if (!x) {
                    throw new NotFoundException(`Don'n exist the Cliente id: ${id}`);
                }

                return x;
            })
        );
    }

    public save(model: CreateClienteDTO): Observable<Cliente> {
        return forkJoin([
            this._categoriaService.getById(model.categoria),
            from(model.cuentas).pipe(
                mergeMap(x => this._tipoCuentaService.getById(x))
            ),
            from(model.servicios.solicitudes).pipe(
                mergeMap(x => this._servicioService.getById(x.servicio))
            ),
            from(model.servicios.serviciosObtenidos).pipe(
                mergeMap(x => this._servicioService.getById(x.servicio))
            ),
            of(model)
        ]).pipe(
            map(([first, second, third, fourth, fifth]) => {
                return { first, second, third, fourth, fifth }
            }),
            mergeMap(data => new this.clienteModel(data.fifth).save()),
            catchError(error => throwError(error))
        );
    }

    public patch(id: string, model: UpdateClienteDTO): Observable<Cliente> {
        return from(this.clienteModel.findByIdAndUpdate({ _id: id }, model, { new: true }).exec());
    }

    public update(id: string, model: UpdateClienteDTO): Observable<Cliente> {
        return from(this.clienteModel.findByIdAndUpdate({ _id: id }, model, { new: true }).exec());
    }

    public delete(id: string): Observable<any> {
        return of(this.clienteModel.deleteOne({ _id: id }).exec());
    }
}