import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({

  providedIn: 'root'
})

export class AccountService {

  baseUrl: string = 'https://localhost:5001/api/';

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  public login(model: any) {

    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {

        const user = response;
        if (user) {

          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  public register(model: any) {

    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    )
  }

  public setCurrentUser(user: User): void {

    this.currentUserSource.next(user);
  }

  public logOut(): void {

    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
