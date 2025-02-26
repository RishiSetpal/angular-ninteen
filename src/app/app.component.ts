import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TwowaycomponentComponent } from './twowaycomponent/twowaycomponent.component';
import { ParentcmpComponent } from './parentcmp/parentcmp.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveformcmpComponent } from './reactiveformcmp/reactiveformcmp.component';
import { SplitwiseAppComponent } from './splitwise-app/splitwise-app.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';

// Custom Pipe to Add Number and JSON Object
@Pipe({
  name: 'addNumberToJson',
})
export class AddNumberToJsonPipe implements PipeTransform {
  transform(number: number, obj: any, key: string): any {
    if (obj && key in obj && typeof obj[key] === 'number') {
      return number + obj[key]; // Add number and the specified key's value
    }
    return 'Invalid Operation'; // Return error message for invalid cases
  }
}

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    TwowaycomponentComponent,
    ParentcmpComponent,
    CounterComponent,
    CommonModule,
    FormsModule,
    ReactiveformcmpComponent,
    SplitwiseAppComponent,
    ExpenseTrackerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ninteen';
  name: string = 'Rishi';
  n1: number = 8;
  n2: number = 8;
  imagePath: string = `assets/images/imageone.jpg`;
  isDisabled: boolean = false;

  isLoggedIn: boolean = false;
  showMessage: boolean = false;
  fruitBasket: Array<String> = ['Apple', 'Cherry', 'Banana', 'WaterMellon'];

  toggleBtn() {
    this.isDisabled = !this.isDisabled;
  }

  clickToChange() {
    this.showMessage = !this.showMessage; // this.showMessage = the current will get reserved
  }

  selectedColor = '';
  isHighlighted = false;
  toggleClass() {
    this.isHighlighted = !this.isHighlighted;
  }

  textColor = '';
  fontSize = '';
  changeColor() {
    this.textColor = this.textColor === 'black' ? 'blue' : 'red';
    this.fontSize = this.fontSize === '16px' ? '40px' : '10px';
  }

  today: Date = new Date(); // Current date
  price: number = 1500; // Example price

  user1: any = {
    name: 'John',
    age: 18,
    Salary: 21_00_000,
  };
}
