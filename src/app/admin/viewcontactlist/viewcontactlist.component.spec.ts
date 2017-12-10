import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontactlistComponent } from './viewcontactlist.component';

describe('ViewcontactlistComponent', () => {
  let component: ViewcontactlistComponent;
  let fixture: ComponentFixture<ViewcontactlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontactlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
