import { Routes } from '@angular/router';
import { provideRouter, withHashLocation } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
};
