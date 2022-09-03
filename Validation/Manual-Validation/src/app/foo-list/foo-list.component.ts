import { Component, OnInit } from '@angular/core';
import { Foo } from '../models/foo';
import { FooService } from '../services/foo.service';

@Component({
  selector: 'app-foo-list',
  templateUrl: './foo-list.component.html',
  styleUrls: ['./foo-list.component.css']
})
export class FooListComponent implements OnInit {

  constructor(private fooService: FooService) { }

  foos: Foo[] = [];

  ngOnInit(): void {
    this.getFoos();
  }

  private getFoos(): void{
    this.fooService.getFoos().subscribe(foos=>{
      this.foos = foos;
    });
  }

}
