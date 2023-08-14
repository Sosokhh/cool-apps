import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePickerComponent } from './choice-picker.component';

describe('ChoicePickerComponent', () => {
  let component: ChoicePickerComponent;
  let fixture: ComponentFixture<ChoicePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoicePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
