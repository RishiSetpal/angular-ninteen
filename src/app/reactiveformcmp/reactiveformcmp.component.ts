import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveformcmp',
  // standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <!-- <p>
      reactiveformcmp works!
    </p> -->
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username" placeholder="username" />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: ``,
})
export class ReactiveformcmpComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  onSubmit = () => {
    console.log('onSubmit:', this.loginForm.value);
  };
}
