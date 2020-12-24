import { TipoCuentaDTO } from '@models/tipo-cuenta/tipo-cuenta.dto';
import { TipoCuenta } from '@models/tipo-cuenta/tipo-cuenta.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TipoCuentaService {
    constructor(
        @InjectModel('TipoCuenta') private readonly tipoCuentaModel: Model<TipoCuenta>
    ) { }

    public getAll(): Observable<Array<TipoCuenta>> {
        return from(this.tipoCuentaModel.find().exec());
    }

    public getById(id: string): Observable<TipoCuenta> {
        return from(this.tipoCuentaModel.findById(id).exec()).pipe(
            map(x => {
                if (!x) {
                    throw new NotFoundException(`Don'n exist the Tipo de Cuenta id: ${id}`);
                }

                return x;
            })
        );
    }

    public save(model: TipoCuentaDTO): Observable<TipoCuenta> {
        return from(new this.tipoCuentaModel(model).save());
    }

    public update(id: string, model: TipoCuentaDTO): Observable<TipoCuenta> {
        return from(this.tipoCuentaModel.findByIdAndUpdate({ _id: id }, model, { new: true }).exec());
    }

    public delete(id: string): Observable<any> {
        return of(this.tipoCuentaModel.deleteOne({ _id: id }).exec());
    }
}