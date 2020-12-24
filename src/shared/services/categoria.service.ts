import { CategoriaDTO } from '@models/categoria/categoria.dto';
import { Categoria } from '@models/categoria/categoria.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>
    ) { }

    public getAll(): Observable<Array<Categoria>> {
        return from(this.categoriaModel.find().exec());
    }

    public getById(id: string): Observable<Categoria> {
        return from(this.categoriaModel.findById(id).exec()).pipe(
            map(x => {
                if (!x) {
                    throw new NotFoundException(`Don'n exist the Categoria id: ${id}`);
                }

                return x;
            })
        );
    }

    public save(model: CategoriaDTO): Observable<Categoria> {
        return from(new this.categoriaModel(model).save());
    }

    public update(id: string, model: CategoriaDTO): Observable<Categoria> {
        return from(this.categoriaModel.findByIdAndUpdate({ _id: id }, model, { new: true }).exec());
    }

    public delete(id: string): Observable<any> {
        return of(this.categoriaModel.deleteOne({ _id: id }).exec());
    }
}