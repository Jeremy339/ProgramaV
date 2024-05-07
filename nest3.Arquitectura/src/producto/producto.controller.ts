import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';

@ApiTags('CRUD Productos')
@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}
    @ApiOperation({summary: 'Obtener lista de Productos'})
    @ApiResponse({status:200, description:'Retorna lista de productos'})

    @Get()
    funListar(){
        let productos=this.productoService.findAll()
      return productos
    }

    @ApiOperation({summary: 'Crear un nuevo Producto'})
    @ApiResponse({status:200, description:'Registra un nuevo producto'})
    @Post()
    funGuardar(@Body() prod:CreateProductoDto){
        let respuesta =this.productoService.create(prod);
        return respuesta;
    } 

    @ApiOperation({summary: 'Busca un producto por ID'})
    @ApiResponse({status:200, description:'Retorna producto por ID'})
    @Get(':id')
    funMostrar(@Param('id')id){
        return "Mostrando...." +id;
    }

    @ApiOperation({summary: 'Modifica un producto Existente'})
    @ApiResponse({status:200, description:'Modifica un producto ya existente'})
    @Put(':id')
    funModificar(@Param('id')id,@Body()prod){
        return this.productoService.update(id,prod)
    }

    @ApiOperation({summary: 'Elimina un producto ya existente'})
    @ApiResponse({status:200, description:'Elimina un producto ya guardado'})
    @Delete(':id')
    funEliminar(@Param('id')id){
        return "Eliminando" +id;  
        
    }
}


