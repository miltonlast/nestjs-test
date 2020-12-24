import { ServicioDTO } from "@models/servicio/servicio.dto";
import { Servicio } from "@models/servicio/servicio.interface";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ServicioService } from "@services/servicio.service";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags('Servicio')
@UseGuards(JwtAuthGuard)
@Controller('servicio')
export class ServicioController {
    constructor(
        private readonly _servicioService: ServicioService
    ) { }

    @Get()
    public getAll(): Observable<Array<Servicio>> {
        return this._servicioService.getAll();
    }

    @Get(':id')
    public getById(@Param('id') id: string,): Observable<Servicio> {
        return this._servicioService.getById(id);
    }

    @Post()
    public post(@Body() model: ServicioDTO): Observable<Servicio> {
        return this._servicioService.save(model);
    }

    @Put(':id')
    public put(@Param('id') id: string, @Body() model: ServicioDTO): Observable<Servicio> {
        return this._servicioService.update(id, model);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._servicioService.delete(id);
    }
}