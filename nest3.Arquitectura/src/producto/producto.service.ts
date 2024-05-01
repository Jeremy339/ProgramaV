import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    private productos: any[]=[];
    findAll():any[]{
        return this.productos
    }
create(prod:any){
    this.productos.push(prod)
    return prod
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
