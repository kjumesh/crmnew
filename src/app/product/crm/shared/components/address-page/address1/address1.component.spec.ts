import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Address1Component } from './address1.component';

describe('Address1Component', () => {
  let component: Address1Component;
  let fixture: ComponentFixture<Address1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Address1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Address1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
