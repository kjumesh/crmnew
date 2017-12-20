import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcallComponent } from './logcall.component';

describe('LogcallComponent', () => {
  let component: LogcallComponent;
  let fixture: ComponentFixture<LogcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
