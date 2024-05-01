import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getListaProductos(){
    return [
      {
        nombre: "Teclado",
        precio: 25,
        stock: 40,
        imagen:"https://www.computron.com.ec/wp-content/uploads/2023/05/920-010442-1.jpg"
      },
      {
        nombre: "Monitor",
        precio: 250,
        stock: 20,
        imagen: "https://maxitec.vteximg.com.br/arquivos/ids/191082-1000-1000/maxitec-monoprice-monitor-de-24-pulgadas-crystalpro-75hz-1920x1080-ips-44029-1.jpg?v=638304370951770000"
      },
      { nombre: "Mouse", precio: 25, stock: 10, imagen:"https://www.steren.com.ec/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/21364eb0d/mouse-inalambrico-800-1200-1600-dpi-con-acabado-tipo-piel.jpg"},
      { nombre: "Parlante", precio: 30, stock: 10, imagen:"https://maxitec.vteximg.com.br/arquivos/ids/190678-1000-1000/maxitec-logitech-parlantes-multimedia-para-computadora-980-000012-1.jpg?v=638304416744200000"}
    ];
  }

  getListaAlumnos() {
    return [
      {
        cedula: "1755645148",
        nombre: "Jeremy",
        apellido: "Pacho",
        curso: "8vo",
        paralelo: "A",
        direccion: "El Condado",
        asistencia: "Presente",
        telefono: "0962024086",
        correo: "jer@gmail.com",
      },
      {
        cedula:"1755645478",
        nombre: "Alexander",
        apellido: "Loyo",
        curso: "9no",
        paralelo: "B",
        direccion: "Colinas del Norte",
        asistencia: "No Presente",
        telefono: "0996655478",
        correo: "alej@gmail.com",
      },

      {
        cedula: "1718077045",
        nombre: "Alberto",
        apellido: "Del Rio",
        curso: "7mo",
        paralelo: "B",
        direccion: "La Planada",
        asistencia: "Presente",
        telefono: "0987445620",
        correo: "AlbRi@gmail.com",
      },

      {
        cedula: "1718045745",
        nombre: "Juan",
        apellido: "Montoya",
        curso: "3ero de Bachillerato",
        paralelo: "C",
        direccion: "Pisulí",
        asistencia: "No Presente",
        telefono: "0984576542",
        correo: "JuMon@gmail.com",
      },

      {
        cedula: "1766548492",
        nombre: "Justin",
        apellido: "Andres",
        curso: "2do de Bachillerato",
        paralelo: "D",
        direccion: "La Roldós",
        asistencia: "Presente",
        telefono: "0984557890",
        correo: "JustoAn@gmail.com",
      },

      { cedula: "1564511489", nombre: "Ariel", apellido: "Proaño", curso: "1er Bachillerato", paralelo: "A", direccion: "Pisulí", asistencia: "No Presente", telefono: "0984665215", correo: "arypro@gmail.com", }
    ]
  }
}
