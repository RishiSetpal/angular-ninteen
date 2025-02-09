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
  CommonModule for *ngIf
  09-02-2025
 * L4 P3 Using list of Validators
  Use Regex too, 
  ?.invalid ?.touched 
  ?.error.['required']
  ?.error.['pattern']
  09-02-2025 
 * 

  */
@Component({
  selector: 'app-reactiveformcmp',
  // standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    ReactiveformcmpComponent
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username" placeholder="username" />
      <div
        *ngIf="
          loginForm.get('username')?.invalid &&
          loginForm.get('username')?.touched
        "
        style="color: red;"
      >
        <span *ngIf="loginForm.get('username')?.errors?.['required']">
          UserName is Required
        </span>
        <span *ngIf="loginForm.get('username')?.errors?.['pattern']">
          Invalid UserName
        </span>
      </div>
      <br />

      <br />
      <input type="text" formControlName="phone" />
      <div
        *ngIf="
          loginForm.get('phone')?.invalid && loginForm.get('phone')?.touched
        "
        style="color: red;"
      >
        <span *ngIf="loginForm.get('phone')?.errors?.['required']">
          Phone is Required
        </span>
        <span *ngIf="loginForm.get('phone')?.errors?.['pattern']">
          Invalid Phone
        </span>
      </div>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  `,
  styles: ``,
})
export class ReactiveformcmpComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]{3,20}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
  });

  onSubmit = () => {
    console.log('onSubmit Clicked');
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log('onSubmit:', this.loginForm.value);
  };
}
