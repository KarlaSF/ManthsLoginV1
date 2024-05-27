import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    }

];
