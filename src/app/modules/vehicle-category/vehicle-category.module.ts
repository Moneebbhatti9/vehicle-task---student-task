import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCategoryComponent } from 'src/app/components/vehicle-category/vehicle-category.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehicle-category',
    component: VehicleCategoryComponent,
  },
];

@NgModule({
  declarations: [VehicleCategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [VehicleCategoryComponent],
})
export class VehicleCategoryModule {}
