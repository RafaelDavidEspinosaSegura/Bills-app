import { Component } from '@angular/core';
import { Expense, ExpenseCategory } from '../../models/expenseModel';
import { NgFor, NgClass, DatePipe, DecimalPipe } from '@angular/common';
import { ExpenseAdd } from '../expense-add/expense-add';

@Component({
  selector: 'app-expense-list',
  imports: [NgFor, NgClass, DatePipe, DecimalPipe, ExpenseAdd],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.css'],
})
export class ExpenseList {
  showModal = false;
  modalMessage = 'Agrega un nuevo gasto a tu lista';
  expenseList: Expense[] = [
    {
      id: 1,
      description: 'Almuerzo',
      amount: 25000,
      date: new Date(2026, 4, 20),
      category: ExpenseCategory.Food,
    },
    {
      id: 2,
      description: 'Transporte',
      amount: 5000,
      date: new Date(2026, 4, 21),
      category: ExpenseCategory.Transport,
    },
  ];
  openModal(): void {
    this.showModal = true;
  }
  onExpenseAdded(data: Omit<Expense, 'id'>): void {
    const newId = Math.max(...this.expenseList.map((e) => e.id), 0) + 1;
    this.expenseList.push({ id: newId, ...data });
    this.showModal = false;
  }
  onDeleteExpense(id: number): void {
    this.expenseList = this.expenseList.filter((e) => e.id !== id);
  }
  getCategoryClass(category: ExpenseCategory): string {
    const map: Record<ExpenseCategory, string> = {
      [ExpenseCategory.Housing]: 'cat-housing',
      [ExpenseCategory.Food]: 'cat-food',
      [ExpenseCategory.Entertainment]: 'cat-entertainment',
      [ExpenseCategory.Health]: 'cat-health',
      [ExpenseCategory.Transport]: 'cat-transport',
      [ExpenseCategory.Others]: 'cat-others',
    };
    return map[category] ?? 'cat-others';
  }
  getCategoryName(category: ExpenseCategory): string {
    const names: Record<ExpenseCategory, string> = {
      [ExpenseCategory.Housing]: 'Vivienda',
      [ExpenseCategory.Food]: 'Comida',
      [ExpenseCategory.Entertainment]: 'Entretenimiento',
      [ExpenseCategory.Health]: 'Salud',
      [ExpenseCategory.Transport]: 'Transporte',
      [ExpenseCategory.Others]: 'Otros',
    };
    return names[category] ?? 'Otros';
  }
}
