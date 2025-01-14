import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaycomponent',
  imports: [FormsModule],
  templateUrl: './twowaycomponent.component.html',
  styleUrl: './twowaycomponent.component.css',
})
export class TwowaycomponentComponent {
  title: string = 'Twoway Data Binding';
  img: string = 'Twoway Data Binding';
}
