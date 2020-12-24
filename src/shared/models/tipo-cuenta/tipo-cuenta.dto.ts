import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class TipoCuentaDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type: String, description: 'description' })
    descripcion: string;
}