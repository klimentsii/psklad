import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgolokPageComponent } from './ugolok-page.component';

describe('UgolokPageComponent', () => {
  let component: UgolokPageComponent;
  let fixture: ComponentFixture<UgolokPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgolokPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgolokPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
