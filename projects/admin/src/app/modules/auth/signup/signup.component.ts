import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserModel } from '../../../models/user-model';
import { AuthService } from '../auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    fullName: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { validators: [Validators.required] }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required],
    }),
    phoneNumber: new FormControl('', { validators: [Validators.required] }),
  });
  constructor(private router: Router, private _authService: AuthService) {}

  onSubmit() {
    console.log('Successfully Signed Up');
    console.log(this.signupForm.value);
    if (
      this.signupForm.controls['password'].value !==
      this.signupForm.controls['confirmPassword'].value
    ) {
      console.error('Passwords do not match');
      return;
    }
    let userDetails: UserModel = {
      fullName: this.signupForm.controls['fullName'].value,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
      phoneNumber: this.signupForm.controls['phoneNumber'].value,
    };
    this._authService
      .register(userDetails)
      .then((response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/auth/login']);
      })
      .catch((error) => {
        console.error('Registration failed', error);
      });
  }
}
