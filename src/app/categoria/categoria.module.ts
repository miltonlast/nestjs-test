import { CategoriaSchema } from '@models/categoria/categoria.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaService } from '@services/categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaSchema }])        
    ],
    controllers: [CategoriaController],
    providers: [CategoriaService]
})
export class CategoriaModule { }