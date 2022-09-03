import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disabledInput: boolean = true;

  source: string = "/assets/Week_2_4_6.PNG";
}
