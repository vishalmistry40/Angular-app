import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

export const router : ModuleWithProviders=RouterModule.forRoot([
    {path:'',component:SigninComponent},
    {path:'Register',component:RegisterComponent},

])