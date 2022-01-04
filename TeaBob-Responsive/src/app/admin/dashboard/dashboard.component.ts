import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


   elzero(){
    window.location.href="https://elzero.org/css-assignments-lesson-from-30-to-33/";
  }
}
