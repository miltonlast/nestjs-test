import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsMongoId, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ClienteSolicitudesServiciosObtenidosDTO } from "./cliente-solicitudes-servicios-obtenidos.dto";

export class CreateClienteDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: 'nombreCliente' })
    nombreCliente: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: 'estadoCivil' })
    estadoCivil: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: 'direccion' })
    direccion: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: 'numeroTelefono' })
    numeroTelefono: string;

    @IsNotEmpty()
    @IsMongoId({ each: true })
    @ApiProperty({ type: String, isArray: true, description: 'cuentas' })
    cuentas: Array<string>;

    @ValidateNested()
    @Type(() => ClienteSolicitudesServiciosObtenidosDTO)
    @ApiProperty({ type: ClienteSolicitudesServiciosObtenidosDTO, description: 'servicios' })
    servicios: ClienteSolicitudesServiciosObtenidosDTO;

    @IsNotEmpty()
    @IsMongoId()
    @ApiProperty({ type: String, description: 'categoria' })
    categoria: string;
}