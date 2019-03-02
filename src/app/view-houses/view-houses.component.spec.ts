import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousesComponent } from './view-houses.component';

describe('ViewHousesComponent', () => {
  let component: ViewHousesComponent;
  let fixture: ComponentFixture<ViewHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
