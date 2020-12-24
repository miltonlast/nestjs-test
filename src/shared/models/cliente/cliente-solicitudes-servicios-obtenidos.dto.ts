import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { ClienteServiciosObtenidosDTO } from "./cliente-servicios-obtenidos.dto";
import { ClienteSolicitudesDTO } from "./cliente-solicitudes.dto";

export class ClienteSolicitudesServiciosObtenidosDTO {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClienteSolicitudesDTO)
    @ApiProperty({ type: ClienteSolicitudesDTO, isArray: true, description: 'solicitudes' })
    solicitudes: Array<ClienteSolicitudesDTO>;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClienteServiciosObtenidosDTO)
    @ApiProperty({ type: ClienteServiciosObtenidosDTO, isArray: true, description: 'serviciosObtenidos' })
    serviciosObtenidos: Array<ClienteServiciosObtenidosDTO>;
}