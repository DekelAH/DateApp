import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  public registerToggle(): void {

    this.registerMode = !this.registerMode;
  }

  public cancelRegisterMode(event: boolean): void {

    this.registerMode = event;
  }

}
