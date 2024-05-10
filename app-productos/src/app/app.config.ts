import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

//Aquí se importan las rutas
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
