import { Component, OnInit } from '@angular/core';
import { Foo } from '../models/foo';
import { FooService } from '../services/foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  foo: Foo = new Foo();
  message: string = '';

  constructor(public fooService: FooService) { }

  ngOnInit(): void {
  }

  createFoo(): void{
    this.fooService.createFoo(this.foo).subscribe(result=>{
      if(result){
        this.message = 'Foo Created';
        this.foo = new Foo();
      }
    });
  }

}
