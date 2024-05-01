import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/producto")
  funListarProductos(){
    let productos = this.appService.getListaProductos();
    return productos;
  }

  @Get("/listaAlumnos")
  getListaAlumnos(){
    return this.appService.getListaAlumnos();
  }
}
