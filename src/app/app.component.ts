import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TwowaycomponentComponent } from "./twowaycomponent/twowaycomponent.component";
import { ParentcmpComponent } from './parentcmp/parentcmp.component';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TwowaycomponentComponent, ParentcmpComponent, CounterComponent],
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

  toggleBtn () {
    this.isDisabled = !this.isDisabled;  
  }
}
