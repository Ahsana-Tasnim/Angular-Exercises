import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooListComponent } from './foo-list.component';

describe('FooListComponent', () => {
  let component: FooListComponent;
  let fixture: ComponentFixture<FooListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
