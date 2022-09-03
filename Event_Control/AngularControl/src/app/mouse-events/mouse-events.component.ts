import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {

  mouseCoordinates: string; 

  constructor() { }

  ngOnInit(): void {
  }

  onMouseMove(event: any){
    console.log(event);
    this.mouseCoordinates = `x: ${event.clientX} y: ${event.clientY}`;
  }

}
