import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductoDto {
    @IsNotEmpty() // Utilizando IsNotEmpty de class-validator
    readonly nombre: string;
    @IsNotEmpty()
    readonly precio: number;
    @IsNotEmpty()
    readonly cantidad: number;
}