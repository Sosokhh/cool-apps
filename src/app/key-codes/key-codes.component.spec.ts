import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCodesComponent } from './key-codes.component';

describe('KeyCodesComponent', () => {
  let component: KeyCodesComponent;
  let fixture: ComponentFixture<KeyCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
