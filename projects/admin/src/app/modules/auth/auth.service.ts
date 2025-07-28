import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthLoginModel } from '../../models/auth-login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(auth:AuthLoginModel):Promise<boolean> {
    console.log('Login called with:', auth.email, auth.password);
    return firstValueFrom(
      this.http.post('api/auth/login', { email: auth.email, password: auth.password })
    ) as Promise<boolean>;
  }

  }

