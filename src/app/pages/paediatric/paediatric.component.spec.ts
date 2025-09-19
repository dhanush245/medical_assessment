import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaediatricComponent } from './paediatric.component';

describe('PaediatricComponent', () => {
  let component: PaediatricComponent;
  let fixture: ComponentFixture<PaediatricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaediatricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaediatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
