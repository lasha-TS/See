import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgianfilmsComponent } from './georgianfilms.component';

describe('GeorgianfilmsComponent', () => {
  let component: GeorgianfilmsComponent;
  let fixture: ComponentFixture<GeorgianfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgianfilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgianfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
