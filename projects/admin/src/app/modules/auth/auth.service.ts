import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string):Promise<boolean> {
    console.log('Login called with:', email, password);
    return firstValueFrom(
      this.http.post('api/auth/login', { email, password }) 
    )as Promise<boolean>;
  }

  }

