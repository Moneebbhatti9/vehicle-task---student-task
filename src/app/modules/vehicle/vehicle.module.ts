import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicledetailComponent } from '../../components/vehicledetail/vehicledetail.component';
import { VehiclelistComponent } from '../../components/vehiclelist/vehiclelist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehiclelist',
    component: VehiclelistComponent,
  },
  {
    path: 'vehicleDetail',
    component: VehicledetailComponent,
  },
];

@NgModule({
  declarations: [VehiclelistComponent, VehicledetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [VehiclelistComponent, VehicledetailComponent],
})
export class VehicleModule {}
