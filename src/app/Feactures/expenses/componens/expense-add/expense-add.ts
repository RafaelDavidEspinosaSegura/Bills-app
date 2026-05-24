import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Expense, ExpenseCategory } from '../../models/expenseModel';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-add',
  imports: [FormsModule],
  templateUrl: './expense-add.html',
  styleUrls: ['./expense-add.css'],
})
export class ExpenseAdd implements OnInit {
  @Output() expenseAdded = new EventEmitter<Omit<Expense, 'id'>>();
  @Output() closed = new EventEmitter<void>();
  @Input() message!: string;

  readonly ExpenseCategory = ExpenseCategory;

  newExpense = {
    description: '',
    amount: 0,
    date: '',
    category: ExpenseCategory.Others,
  };

  ngOnInit(): void {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.newExpense.date = `${yyyy}-${mm}-${dd}`;
  }

  close(): void {
    this.closed.emit();
  }

  submit(): void {
    if (!this.newExpense.description || !this.newExpense.amount || !this.newExpense.date) return;
    const [year, month, day] = this.newExpense.date.split('-').map(Number);
    this.expenseAdded.emit({
      description: this.newExpense.description,
      amount: Number(this.newExpense.amount),
      date: new Date(year, month - 1, day),
      category: Number(this.newExpense.category) as ExpenseCategory,
    });
  }
}
