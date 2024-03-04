import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from '../vehiclelist/vehiclelist.component';

@Component({
  selector: 'app-vehicledetail',
  templateUrl: './vehicledetail.component.html',
  styleUrls: ['./vehicledetail.component.css'],
})
export class VehicledetailComponent implements OnInit {
  id: number = -1;
  detail: any;
  constructor(public route: ActivatedRoute, private vs: VehicleService) {}

  getParams() {
    this.route.queryParams.subscribe((param) => {
      this.id = Number(param['id']);
    });

    this.detail = this.vs.vehicles.find((item) => item.id == this.id);
    console.log(this.detail);
  }

  ngOnInit(): void {
    this.getParams();
  }
}
