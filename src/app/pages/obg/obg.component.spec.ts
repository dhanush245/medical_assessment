import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObgComponent } from './obg.component';

describe('ObgComponent', () => {
  let component: ObgComponent;
  let fixture: ComponentFixture<ObgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
