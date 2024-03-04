import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { VehicleCategoryModule } from './modules/vehicle-category/vehicle-category.module';
import { StudentformComponent } from './components/studentform/studentform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductformComponent } from './components/productform/productform.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, StudentformComponent, ProductformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VehicleModule,
    VehicleCategoryModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
