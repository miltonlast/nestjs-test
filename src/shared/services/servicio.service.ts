import { ServicioDTO } from '@models/servicio/servicio.dto';
import { Servicio } from '@models/servicio/servicio.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicioService {
    constructor(
        @InjectModel('Servicio') private readonly servicioModel: Model<Servicio>
    ) { }

    public getAll(): Observable<Array<Servicio>> {
        return from(this.servicioModel.find().exec());
    }

    public getById(id: string): Observable<Servicio> {
        return from(this.servicioModel.findById(id).exec()).pipe(
            map(x => {
                if (!x) {
                    throw new NotFoundException(`Don'n exist the Servicio id: ${id}`);
                }

                return x;
            })
        );
    }

    public save(model: ServicioDTO): Observable<Servicio> {
        return from(new this.servicioModel(model).save());
    }

    public update(id: string, model: ServicioDTO): Observable<Servicio> {
        return from(this.servicioModel.findByIdAndUpdate({ _id: id }, model, { new: true }).exec());
    }

    public delete(id: string): Observable<any> {
        return of(this.servicioModel.deleteOne({ _id: id }).exec());
    }
}