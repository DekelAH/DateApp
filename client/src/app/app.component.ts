import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './_services/account.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Dating App';
  public users: any;

  constructor(private accountService: AccountService) {}

  public ngOnInit(): void {
    
    this.setCurrentUser();
  }

  public setCurrentUser(): void {

    const user: User = JSON.parse(localStorage.getItem('user')); 
    this.accountService.setCurrentUser(user);
  }
}
