import { CategoriaSchema } from '@models/categoria/categoria.schema';
import { ClienteSchema } from '@models/cliente/cliente.schema';
import { ServicioSchema } from '@models/servicio/servicio.schema';
import { TipoCuentaSchema } from '@models/tipo-cuenta/tipo-cuenta.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaService } from '@services/categoria.service';
import { ClienteService } from '@services/cliente.service';
import { ServicioService } from '@services/servicio.service';
import { TipoCuentaService } from '@services/tipo-cuenta.services';
import { ClienteController } from '../cliente/cliente.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema }]),
        MongooseModule.forFeature([{ name: 'TipoCuenta', schema: TipoCuentaSchema }]),
        MongooseModule.forFeature([{ name: 'Servicio', schema: ServicioSchema }]),
        MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaSchema }])
    ],
    controllers: [ClienteController],
    providers: [
        ClienteService,
        TipoCuentaService,
        ServicioService,
        CategoriaService
    ],
})
export class ClienteModule { }