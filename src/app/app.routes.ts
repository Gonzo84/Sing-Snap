import {ModuleWithProviders}from '@angular/core';
import {Routes, RouterModule}from '@angular/router';

import {HomeViewComponent} from "./folder/home-view/home-view.component";
import {AboutUsComponent} from "./folder/about-us/about-us.component";
import {FeaturesComponent} from "./folder/features/features.component";
import {LoginComponent} from "./folder/login/login.component";
import {SignUpComponent} from "./folder/sign-up/sign-up.component";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeViewComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
