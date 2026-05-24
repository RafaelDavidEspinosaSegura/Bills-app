import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAdd } from './expense-add';

describe('ExpenseAdd', () => {
  let component: ExpenseAdd;
  let fixture: ComponentFixture<ExpenseAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
