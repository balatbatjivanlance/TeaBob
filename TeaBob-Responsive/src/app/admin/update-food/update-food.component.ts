import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  constructor( private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public dialog: MatDialog )
   { }

  ngOnInit(): void {
    this.pullProductDetails();
    // this.updateFood();

  }
  user_role = localStorage.getItem("user_role");



  foodinfo: any = {};
  food_payload: any [] = []; 

  food_name: any;
  food_price: any;
  food_active: any;
  food_featured: any;

  pullProductDetails() {
    this.foodinfo.food_id = this.data.food_id;

    this.ds.sendApiRequest("pullProductDetails", this.data.food_id).subscribe((data: { payload: any; }) => {
    this.food_payload = data.payload;
    
    this.food_name = this.food_payload[0].food_name;
    this.food_price = this.food_payload[0].food_price;
    this.food_active = this.food_payload[0].food_active;
    this.food_featured = this.food_payload[0].food_featured;
    }
    )
  }

  // updatefood: any;
  // updateFood(){
  //       this.ds.sendApiRequest("updatefood", null).subscribe((data: { payload: any; }) => {
  //       this.updatefood = data.payload;
      
  //     console.log(this.updatefood);
  //   })
  // }
}
