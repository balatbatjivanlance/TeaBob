import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.adminPullFood();
    // this.updateFood();

  }
  user_role = localStorage.getItem("user_role");


  adminfood: any;

  adminPullFood() {
      this.ds.sendApiRequest("adminfood", null).subscribe((data: { payload: any; }) => {
        this.adminfood = data.payload;
        
        console.log(this.adminfood);
      })
    
  }

  // updatefood: any;
  // updateFood(){
  //       this.ds.sendApiRequest("updatefood", null).subscribe((data: { payload: any; }) => {
  //       this.updatefood = data.payload;
      
  //     console.log(this.updatefood);
  //   })
  // }
}
