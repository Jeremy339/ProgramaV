import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Get()
    funListar(){ let productos=this.productoService.findAll
      return productos
    }
    @Post()
    funGuardar(@Body()prod){
      return prod
    }

    @Get(':id')
    funMostrar(@Param('id')id){
        return "Mostrando...." +id;
    }
    
    @Put(':id')
    funModificar(@Param('id')id,@Body()prod){
        return "Modificando" +id;
    }

    @Delete(':id')
    funEliminar(@Param('id')id){
        return "Eliminando" +id;  
    }
}


