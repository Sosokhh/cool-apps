import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingAppComponent } from './drawing-app.component';

describe('DrawingAppComponent', () => {
  let component: DrawingAppComponent;
  let fixture: ComponentFixture<DrawingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
