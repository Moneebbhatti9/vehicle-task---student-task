import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclelistComponent } from './components/vehiclelist/vehiclelist.component';
import { StudentformComponent } from './components/studentform/studentform.component';
import { ProductformComponent } from './components/productform/productform.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclelistComponent,
  },
  {
    path: 'studentForm',
    component: StudentformComponent,
  },
  {
    path: 'productForm',
    component: ProductformComponent,
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle/vehicle.module').then(
        (mod: any) => mod.VehicleModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./modules/vehicle-category/vehicle-category.module').then(
        (mod: any) => mod.VehicleCategoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
