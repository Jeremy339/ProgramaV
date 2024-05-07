import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProxyOptions, Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    private productos: any[]=[];
    constructor (@InjectRepository(Producto)private readonly productoRepository: Repository<Producto>){}
    async findAll(): Promise<any[]> {
        return this.productoRepository.find();
    }
    async create(prod:any){
    //this.productos.push(prod)
    const producto = new Producto()
    producto.nombre = prod.nombre;
    producto.precio = prod.precio;
    producto.cantidad = prod.cantidad;
    return await this.productoRepository.save(producto);
}

update(nombre:string,prod:any):any{
    const index= this.productos.findIndex( existeProd =>existeProd.nombre==nombre);
    if(index!=1){
        this.productos[index]=prod;
        return this.productos[index];
    }
    return null
}

delete(nombre:string):any{
    const index= this.productos.findIndex(existeProd => existeProd.nombre);
    if(index! ==-1){
        ///Elimina producto encontrado del arrau
        const productoEliminado = this.productos.splice(index, 1);
        return productoEliminado[0];
    }
}
}
