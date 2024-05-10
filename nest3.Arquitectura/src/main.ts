import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.useGlobalPipes(new ValidationPipe({
  disableErrorMessages:false,
  whitelist: true,
  forbidNonWhitelisted: true
})) 

//Class Validator (Instalando npm i --save class-validator class-transformer)

  
const options = new DocumentBuilder()

    .setTitle('Productos')
    .setDescription('Descripción de la API Productos')
    .setVersion('1.0')
    .addTag('productos')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
//Probamos con localhost:3000/api
  await app.listen(3000);
}
bootstrap();