import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFeatureRoutingModule } from './home-feature-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeFeatureRoutingModule
  ]
})
export class HomeFeatureModule { }
