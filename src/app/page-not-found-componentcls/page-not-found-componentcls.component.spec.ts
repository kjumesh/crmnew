import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponentclsComponent } from './page-not-found-componentcls.component';

describe('PageNotFoundComponentclsComponent', () => {
  let component: PageNotFoundComponentclsComponent;
  let fixture: ComponentFixture<PageNotFoundComponentclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponentclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponentclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
