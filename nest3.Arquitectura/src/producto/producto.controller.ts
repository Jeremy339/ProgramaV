import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get()
    funListar(){
        let productos=this.productoService.findAll()
      return productos
    }

    @Post()
    funGuardar(@Body()prod){
        let respuesta =this.productoService.create(prod);
        return respuesta
    } 

    @Get(':id')
    funMostrar(@Param('id')id){
        return "Mostrando...." +id;
    }
    
    @Put(':id')
    funModificar(@Param('id')id,@Body()prod){
        return this.productoService.update(id,prod)
    }

    @Delete(':id')
    funEliminar(@Param('id')id){
        return "Eliminando" +id;  
        
    }
}


