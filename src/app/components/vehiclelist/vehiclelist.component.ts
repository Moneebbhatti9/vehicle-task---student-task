import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

export interface Vehicle {
  id: number;
  category: string;
  name: string;
  model: string;
  fuelType: string;
  color: string;
}

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css'],
})
export class VehiclelistComponent implements OnInit {
  vehicles: Vehicle[] = [];

  ngOnInit(): void {
    this.getVehicleList();
  }

  constructor(private vs: VehicleService, public router: Router) {}

  getVehicleList() {
    this.vehicles = this.vs.getAllVehicles();
  }

  vehicleDetail(id: number) {
    this.router.navigate(['/vehicle/vehicleDetail'], {
      queryParams: { id: id },
    });
  }
}
