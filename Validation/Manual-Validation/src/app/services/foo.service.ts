import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Foo } from '../models/foo';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  private foos: Foo[] = [];
  errors: string[] = [];

  constructor() { }

  protected validateFoo(foo: Foo): boolean{
    this.errors = [];

    if(foo.name == null){
      this.errors.push('Foo name is required');
    }
    if(!foo.height || isNaN(foo.height) || foo.height <= 0){
      this.errors.push('Foo must have a valid height');
    }

    return this.errors.length == 0;
  }

  createFoo(foo: Foo): Observable<boolean>{
    if(!this.validateFoo(foo))
      return of(false);

      this.foos.push(foo);
      localStorage.setItem('foos', JSON.stringify(this.foos));
      return of(true);
  }

  getFoos(): Observable<Foo[]>{
    let local = localStorage.getItem('foos');
    
    if(local)
    this.foos = <Foo[]>(JSON.parse(local));

    return of(this.foos);
  }
}
