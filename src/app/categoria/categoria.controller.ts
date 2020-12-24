import { CategoriaDTO } from "@models/categoria/categoria.dto";
import { Categoria } from "@models/categoria/categoria.interface";
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CategoriaService } from "@services/categoria.service";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags('Categoria')
@UseGuards(JwtAuthGuard)
@Controller('categoria')
export class CategoriaController {
    constructor(
        private readonly _categoriaService: CategoriaService
    ) { }

    @Get()
    public getAll(): Observable<Array<Categoria>> {
        return this._categoriaService.getAll();
    }

    @Get(':id')
    public getById(@Param('id') id: string,): Observable<Categoria> {
        return this._categoriaService.getById(id);
    }

    @Post()
    @ApiBody({ type: CategoriaDTO })
    public post(@Body() model: CategoriaDTO): Observable<Categoria> {
        return this._categoriaService.save(model);
    }

    @Put(':id')
    @ApiBody({ type: CategoriaDTO })
    public put(@Param('id') id: string, @Body() model: CategoriaDTO): Observable<Categoria> {
        return this._categoriaService.update(id, model);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._categoriaService.delete(id);
    }
}