import { ServicioSchema } from '@models/servicio/servicio.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicioService } from '@services/servicio.service';
import { ServicioController } from './servicio.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Servicio', schema: ServicioSchema }])
    ],
    controllers: [ServicioController],
    providers: [ServicioService],
})
export class ServicioModule { }