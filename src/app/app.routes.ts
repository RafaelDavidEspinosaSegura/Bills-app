import { Routes } from '@angular/router';
import { Layout } from './Layout/layout/layout';
import { ExpenseList } from './Feactures/expenses/componens/expense-list/expense-list';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'inicio', component: ExpenseList },   
      { path: 'listado', component: ExpenseList },  
      { path: 'ingresos', component: ExpenseList }  
    ]
  }
];
