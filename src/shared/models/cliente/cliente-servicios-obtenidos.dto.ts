import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId } from "class-validator";

export class ClienteServiciosObtenidosDTO {
    @IsMongoId()
    @ApiProperty({ type: String, description: 'servicio' })
    servicio: string;
}