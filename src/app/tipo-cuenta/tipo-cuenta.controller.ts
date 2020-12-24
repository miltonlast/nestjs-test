import { TipoCuentaDTO } from "@models/tipo-cuenta/tipo-cuenta.dto";
import { TipoCuenta } from "@models/tipo-cuenta/tipo-cuenta.interface";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TipoCuentaService } from "@services/tipo-cuenta.services";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags('Tipo Cuenta')
@UseGuards(JwtAuthGuard)
@Controller('tipo-cuenta')
export class TipoCuentaController {
    constructor(
        private readonly _tipoCuentaService: TipoCuentaService
    ) { }

    @Get()
    public getAll(): Observable<Array<TipoCuenta>> {
        return this._tipoCuentaService.getAll();
    }

    @Get(':id')
    public getById(@Param('id') id: string,): Observable<TipoCuenta> {
        return this._tipoCuentaService.getById(id);
    }

    @Post()
    public post(@Body() model: TipoCuentaDTO): Observable<TipoCuenta> {
        return this._tipoCuentaService.save(model);
    }

    @Put(':id')
    public put(@Param('id') id: string, @Body() model: TipoCuentaDTO): Observable<TipoCuenta> {
        return this._tipoCuentaService.update(id, model);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._tipoCuentaService.delete(id);
    }
}