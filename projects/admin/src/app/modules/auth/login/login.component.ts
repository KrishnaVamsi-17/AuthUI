import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedLibService } from '../../../../../../shared-lib/src/public-api';
import { InputComponent } from "../../../../../../ui-kit/src/public-api";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _sharedLibService: SharedLibService = inject(SharedLibService);
  private _authService: AuthService = inject(AuthService);
   constructor(private router: Router, private _http: HttpClient , private sharedLibService: SharedLibService) {
      console.log('LoginComponent initialized');
      console.log('SharedLibService:', this._sharedLibService);
      console.log('Router:', this.router);
      console.log('HttpClient:', this._http);
      // Fetch data from the shared library service
      // this._sharedLibService.getData().subscribe((data) => {
      //   console.log('Data fetched from shared lib service:', data);
      // });
    }
     loginForm:FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
     });
    async login() {
      console.log("Successfully Loggedin");
      console.log(this.loginForm);
      await this._authService.login(this.loginForm.value.email, this.loginForm.value.password).then(() => {
        console.log('Login successful');
        // this.router.navigate(['/dashboard']);
      });
    }
}
