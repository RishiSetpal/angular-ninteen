import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TwowaycomponentComponent } from './twowaycomponent/twowaycomponent.component';
import { ParentcmpComponent } from './parentcmp/parentcmp.component';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    TwowaycomponentComponent,
    ParentcmpComponent,
    CounterComponent,
    CommonModule,
    FormsModule,
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
}
