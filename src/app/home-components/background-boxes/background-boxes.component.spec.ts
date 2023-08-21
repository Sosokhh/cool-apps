import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBoxesComponent } from './background-boxes.component';

describe('BackgroundBoxesComponent', () => {
  let component: BackgroundBoxesComponent;
  let fixture: ComponentFixture<BackgroundBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
