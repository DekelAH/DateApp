import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'client';
  public users: any;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    
    this.getUsers();
  }

  private getUsers(): void {

    this.http.get('https://localhost:5001/api/users').subscribe(response => {

      this.users = response;
      }, error => {
  
        console.log(error);
      });
  }

}
