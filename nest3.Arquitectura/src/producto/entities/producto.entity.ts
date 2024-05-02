import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: string;

  @Column()
  cantidad: string;
}