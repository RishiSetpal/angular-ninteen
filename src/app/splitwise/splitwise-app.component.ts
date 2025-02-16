import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splitwise',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div
      class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div class="p-6 w-96 shadow-lg bg-white rounded-xl">
        <h1 class="text-xl font-bold mb-4">Splitwise - Simple Split</h1>
        <form [formGroup]="splitForm" (ngSubmit)="calculateSplit()">
          <div class="mb-4">
            <label class="block mb-1 font-medium">Total Amount:</label>
            <input
              type="number"
              formControlName="totalAmount"
              class="border p-2 w-full"
              placeholder="Enter total amount"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 font-medium">Number of People:</label>
            <input
              type="number"
              formControlName="numPeople"
              class="border p-2 w-full"
              placeholder="Enter number of people"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white p-2 rounded"
          >
            Split Amount
          </button>
        </form>
        <div class="mt-4 text-lg font-semibold">
          <p *ngIf="splitAmount > 0">
            Each person pays: ₹{{ splitAmount.toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SplitwiseAppComponent {
  splitForm = new FormGroup({
    totalAmount: new FormControl(0),
    numPeople: new FormControl(1),
  });

  splitAmount = 0;

  calculateSplit() {
    const totalAmount = this.splitForm.value.totalAmount || 0;
    const numPeople = this.splitForm.value.numPeople || 1;
    if (numPeople > 0) {
      this.splitAmount = totalAmount / numPeople;
    }
  }
}
