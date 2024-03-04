import { Injectable } from '@angular/core';
import { VehicleCategory } from '../components/vehicle-category/vehicle-category.component';
import { Vehicle } from '../components/vehiclelist/vehiclelist.component';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicleCategories: VehicleCategory[] = [
    { id: 1, name: 'Sedan' },
    { id: 2, name: 'SUV' },
    { id: 3, name: 'Truck' },
    { id: 4, name: 'Electric' },
    { id: 5, name: 'Hybrid' },
    { id: 6, name: 'Convertible' },
  ];

  constructor() {}

  getAllCategories() {
    return this.vehicleCategories;
  }

  vehicles: Vehicle[] = [
    {
      id: 1,
      category: 'Sedan',
      name: 'Car1',
      fuelType: 'Petrol',
      color: 'Red',
      model: '2022',
    },
    {
      id: 2,
      category: 'SUV',
      name: 'Car2',
      fuelType: 'Diesel',
      color: 'Blue',
      model: '2023',
    },
    {
      id: 3,
      category: 'Hybrid',
      name: 'Bike1',
      fuelType: 'Electric',
      color: 'Black',
      model: '2021',
    },
  ];

  getAllVehicles() {
    return this.vehicles;
  }

  getVehicleById(id: number) {
    const vehicle = this.vehicles.find((v) => v.id === id);
    return vehicle;
  }
}
