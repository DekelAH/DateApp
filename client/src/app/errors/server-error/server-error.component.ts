import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})

export class ServerErrorComponent implements OnInit {

  public error: string;

  constructor(private router: Router) {

    const navigaion = this.router.getCurrentNavigation();
    this.error = navigaion?.extras?.state?.error;
   }

  ngOnInit(): void {
  }

}
