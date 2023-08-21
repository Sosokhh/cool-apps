import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverboardComponent } from './hoverboard.component';

describe('HoverboardComponent', () => {
  let component: HoverboardComponent;
  let fixture: ComponentFixture<HoverboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
