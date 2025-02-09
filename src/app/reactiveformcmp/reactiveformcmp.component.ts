import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

/**
 * L4 P2 Made use of Validators & <div *ngIf = loginForm.get('username')?.invalid && loginForm.get('username')?.touched style="color: red;">
 * CommonModule for *ngIf
 * 09-02-2025
 */
@Component({
  selector: 'app-reactiveformcmp',
  // standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username" placeholder="username" />
      <div
        *ngIf="
          loginForm.get('username')?.invalid &&
          loginForm.get('username')?.touched
        "
        style="color: red;"
      >
        UserName is Required!
      </div>
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
