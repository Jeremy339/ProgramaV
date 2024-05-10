import { IsNotEmpty, IsNumber } from 'class-validator';
import { Producto } from '../producto.interface';

export class CreateProductoDto implements Producto{
    @IsNotEmpty() // Utilizando IsNotEmpty de class-validator
    readonly nombre: string;
    @IsNotEmpty()
    readonly precio: number;
    @IsNotEmpty()
    readonly cantidad: number;
    
    
}