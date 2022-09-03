import { Component, OnInit } from '@angular/core';
import { VEHICLE_MAKES } from '../mocks/vehicle-makes';
import { VehicleMake } from '../models/vehicle-make';

@Component({
  selector: 'app-select-check-radio',
  templateUrl: './select-check-radio.component.html',
  styleUrls: ['./select-check-radio.component.css']
})
export class SelectCheckRadioComponent implements OnInit {

  VehicleMake: VehicleMake[] = VEHICLE_MAKES;
  selectedMake: VehicleMake;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value: any){
    let id = value;
    
    if(!isNaN(id)){
      this.selectedMake = this.VehicleMake.find(m=>m.id==id);
    }else{
      this.selectedMake = null;
    }
  }

}
