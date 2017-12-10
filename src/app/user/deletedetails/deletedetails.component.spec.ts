import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedetailsComponent } from './deletedetails.component';

describe('DeletedetailsComponent', () => {
  let component: DeletedetailsComponent;
  let fixture: ComponentFixture<DeletedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
