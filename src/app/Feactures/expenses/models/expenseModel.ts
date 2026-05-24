export enum ExpenseCategory 
{
    Housing,
    Food,
    Entertainment,
    Health,
    Transport,
    Others
}

export interface Expense {
    id: number;
    description: string;
    amount: number;
    date: Date;
    category: ExpenseCategory;
}
export type ExpenseAdd = Omit<Expense, 'id'>;