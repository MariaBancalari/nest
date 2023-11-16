import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import {empleadoModel} from './empleadoModel'


@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: EmpleadosService) {}
    
    @Get()
    getEmpleados() {
        return this.servicio.getEmpleados();

    }

    @Get(':id')
    getEmpleadoById(@Param('id') id: number) {
    return this.servicio.getEmpleadoById (id);
    }

    
    @Post()
    addEmpleado (@Body() modelo:empleadoModel) {
        return this.servicio.addEmpleado(modelo);
    }

    @Delete(':id')
    deleteEmpleado(@Param('id') id:string) {
        return this.servicio.deleteEmpleado(id);
    }

    @Put(':id')
    modificarsalario(@Body() Salario:empleadoModel, @Param('id') id:string) {
        return this.servicio.modificarsalario (id, Salario);
    }
}
