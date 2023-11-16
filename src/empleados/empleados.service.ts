import { Injectable, Delete, Param, Get} from '@nestjs/common';
import {empleadoModel} from './empleadoModel';
import { resolveObjectURL } from 'buffer';



@Injectable()
export class EmpleadosService {

    empleados=[];

    constructor() { 
        let empleado = {
            id: 1,
            Nombre:'Marcelo Ferrari',
            Salario: 300.000,
            Telefono: '03456',
        };
        this.empleados.push(empleado);
        
        empleado = {
            id: 2,
            Nombre:'Aldana Gomez',
            Salario: 350.000,
            Telefono: '01234',
        };
        this.empleados.push(empleado);

        empleado = {
            id: 3,
            Nombre:'German Fuentes',
            Salario: 250.000,
            Telefono: '65432',
        };
        this.empleados.push(empleado);
  }

    getEmpleados() {
        return this.empleados;

    }

    getEmpleadoById(id): string {
        for (let i = 0; i < this.empleados.length; i++) {
          if (this.empleados[i].id == id) {
            return this.empleados[i];
          }
        }
        return 'No se encontro el empleado solicitado';
      }

    addEmpleado(modelo: empleadoModel) {
        const empleado = {
            id: modelo.id,
            Nombre: modelo.Nombre,
            Salario: modelo.Salario,
            Telefono: modelo.Telefono,
        };
        this.empleados.push(empleado);
        return 'Empleado registrado con exito';
    }

    modificarsalario(id: string, modelo: empleadoModel) {
        for (let i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i].id == id) {
                this.empleados[i].Salario = modelo.Salario;
                return 'Salario modificado con exito.';
            }
        }
    return 'No se encontro el empleado a modificar su salario';
    }

    deleteEmpleado(id: string) {
       for (let i = 0; i < this.empleados.length; i++) {
        if (this.empleados[i].id == id) {
            this.empleados.splice(i, 1);
            return 'Empleado eliminado con exito';
        }
    }
    return 'no se encontro el empleado a eliminar';
    }
    
}

