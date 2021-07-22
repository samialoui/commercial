import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppareilComponent } from './view-appareil.component';

describe('ViewAppareilComponent', () => {
  let component: ViewAppareilComponent;
  let fixture: ComponentFixture<ViewAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
