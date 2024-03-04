import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

export interface VehicleCategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-vehicle-category',
  templateUrl: './vehicle-category.component.html',
  styleUrls: ['./vehicle-category.component.css'],
})
export class VehicleCategoryComponent implements OnInit {
  constructor(private vs: VehicleService) {}

  ngOnInit(): void {
    this.allCategories();
  }

  VehicleCategories: VehicleCategory[] = [];

  allCategories() {
    this.VehicleCategories = this.vs.getAllCategories();
  }
}
