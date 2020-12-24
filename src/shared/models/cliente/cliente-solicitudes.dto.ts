import { Estados } from "@models/Estados.enum";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsMongoId, IsNotEmpty } from "class-validator";

export class ClienteSolicitudesDTO {
    @IsMongoId()
    @ApiProperty({ type: String, description: 'servicio' })
    servicio: string;

    @IsNotEmpty()
    @IsEnum(Estados)
    @ApiProperty({ type: Number, description: 'estado', enum: [1, 2, 3, 4] })
    estado: Estados;
}