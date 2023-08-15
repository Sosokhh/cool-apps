import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkWaterComponent } from './drink-water.component';

describe('DrinkWaterComponent', () => {
  let component: DrinkWaterComponent;
  let fixture: ComponentFixture<DrinkWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
