import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Expense {
  name: string;
  amount: number;
  payer: number;
}

@Component({
  selector: 'expense-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule], //CommonModule is used by ngModel, FormsModule is for FormGroup, FormControl, etc.
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css',
})
export class ExpenseTrackerComponent implements OnInit, OnDestroy {
  expenses: Expense[] = [];

  billStarted: boolean = false;
  continueWithCurrent: boolean = false;

  total: number = 0;
  numPeople: number = 0;
  splitAmount: number = 0;

  newExpense: Expense = { name: '', amount: 0, payer: 0 };

  constructor() {}

  ngOnInit(): void {
    console.log('Bill Splitting componet Initialized');
  }

  ngOnDestroy(): void {
    console.log('Bill Splitting componet Initialized');
  }

  addExpense(): void {
    console.log('New Expense Input', this.newExpense);

    if (
      !this.newExpense.name.trim() ||
      this.newExpense.amount <= 0 ||
      this.newExpense.payer <= 0
    ) {
      alert(' Please enter valid expense details..!');
      return;
    }

    // if bill is not started yet and have default values
    // & set number of people to pay
    if (!this.billStarted || this.numPeople <= 0) {
      this.billStarted = true;
      this.numPeople = this.newExpense.payer;
      this.continueWithCurrent = true;
    } else {
      // old num of people/payers is different from current number of people/payers
      if (this.newExpense.payer !== this.numPeople) {
        const isOkPressed = confirm(
          'Do you want to continue with the same bill? clik "Ok" for Yes or cancle to start a new bill?'
        );
        if (isOkPressed) {
          alert(
            `The Number of people must remain constant. Current bill is for ${this.numPeople} people.`
          );
          return;
        } else {
          this.resetBill();
          this.numPeople = this.newExpense.payer;
          this.billStarted = true;
          this.continueWithCurrent = true;
          console.log(
            'New Bill started after resetting numPeople: ',
            this.numPeople
          );
        }
      }
    }

    const expenseToAdd: Expense = {
      name: this.newExpense.name.trim(),
      amount: +this.newExpense.amount,
      payer: +this.newExpense.payer,
    };

    this.expenses.push(expenseToAdd);
    console.log('expense Added: ', expenseToAdd);

    this.calculateTotal();

    this.newExpense = { name: '', amount: 0, payer: this.numPeople };
  }

  removeExpense(index: number): void {
    this.expenses.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    this.splitAmount = this.numPeople ? this.total / this.numPeople : 0;
    console.log('Total: ', this.total, ' Split Amount: ', this.splitAmount);
  }

  setContinueBill(choice: boolean): void {
    this.continueWithCurrent = choice;
    if (!choice) {
      this.startNewBill();
    }
  }

  startNewBill(): void {
    console.log('Starting New Bill...');
    this.expenses = [];
    this.total = 0;
    this.splitAmount = 0;
    this.numPeople = this.newExpense.payer;
    this.continueWithCurrent = true;
    console.log('New Bill started with numPeople', this.numPeople);
  }

  resetBill(): void {
    this.expenses = [];
    this.total = 0;
    this.splitAmount = 0;
    this.billStarted = false;
    this.numPeople = 0;
    this.continueWithCurrent = false;
    this.newExpense = { name: '', amount: 0, payer: 0 };
  }
}
