import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthLoginModel } from '../../models/auth-login-model';
import { UserModel } from '../../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(auth: AuthLoginModel): Promise<boolean> {
    return firstValueFrom(
      this.http.post('https://localhost:7074/api/auth/login', {
        email: auth.email,
        password: auth.password,
      })
    ) as Promise<boolean>;
  }

  register(user: UserModel): Promise<boolean> {
    return firstValueFrom(
      this.http.post('https://localhost:7074/api/auth/register', {
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password,
      })
    ) as Promise<boolean>;
  }
}
