import { TipoCuentaSchema } from '@models/tipo-cuenta/tipo-cuenta.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoCuentaService } from '@services/tipo-cuenta.services';
import { TipoCuentaController } from './tipo-cuenta.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'TipoCuenta', schema: TipoCuentaSchema }])
    ],
    controllers: [TipoCuentaController],
    providers: [TipoCuentaService],
})
export class TipoCuentaModule { }