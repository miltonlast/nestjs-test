import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaModule } from './app/categoria/categoria.module';
import { ClienteModule } from './app/cliente/cliente.module';
import { ServicioModule } from './app/servicio/servicio.module';
import { TipoCuentaModule } from './app/tipo-cuenta/tipo-cuenta.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:abc-123@cluster0.zmyip.mongodb.net/MongoTest?retryWrites=true&w=majority'),
    CategoriaModule,
    TipoCuentaModule,
    ServicioModule,
    ClienteModule,
    AuthModule,
    UsersModule
  ]
})
export class AppModule { }
