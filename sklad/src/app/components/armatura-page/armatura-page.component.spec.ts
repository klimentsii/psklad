import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaturaPageComponent } from './armatura-page.component';

describe('ArmaturaPageComponent', () => {
  let component: ArmaturaPageComponent;
  let fixture: ComponentFixture<ArmaturaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaturaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaturaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
