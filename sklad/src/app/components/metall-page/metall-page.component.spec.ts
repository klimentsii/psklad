import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallPageComponent } from './metall-page.component';

describe('MetallPageComponent', () => {
  let component: MetallPageComponent;
  let fixture: ComponentFixture<MetallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetallPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
