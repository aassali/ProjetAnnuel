import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuth } from './UserAuth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private resourcePath = '/api/auth/users';

  public constructor(private readonly httpClient: HttpClient) {}

  public authenticate(email: string, password: string) {
    const body = { email, password };

    return this.httpClient.post('http://localhost:3000/api/auth', body);
  }
}
