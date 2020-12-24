import { Cliente } from "@models/cliente/cliente.interface";
import { CreateClienteDTO } from "@models/cliente/create-cliente.dto";
import { UpdateClienteDTO } from "@models/cliente/update-cliente.dto";
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ClienteService } from "@services/cliente.service";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags('Cliente')
@UseGuards(JwtAuthGuard)
@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly _clienteService: ClienteService
    ) { }

    @Get()
    public findAll(): Observable<Array<Cliente>> {
        return this._clienteService.findAll();
    }

    @Get(':id')
    public getById(@Param('id') id: string,): Observable<Cliente> {
        return this._clienteService.getById(id);
    }

    @Post()
    public save(@Body() model: CreateClienteDTO): Observable<Cliente> {
        return this._clienteService.save(model);
    }

    @Patch(':id')
    @ApiBody({ type: UpdateClienteDTO })
    public patch(@Param('id') id: string, @Body() model: UpdateClienteDTO): Observable<Cliente> {
        return this._clienteService.patch(id, model);
    }

    @Put(':id')
    @ApiBody({ type: UpdateClienteDTO })
    public put(@Param('id') id: string, @Body() model: UpdateClienteDTO): Observable<Cliente> {
        return this._clienteService.update(id, model);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clienteService.delete(id);
    }
}