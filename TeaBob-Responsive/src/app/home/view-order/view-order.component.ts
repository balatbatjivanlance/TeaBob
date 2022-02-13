import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullFoodFeatured();
  }

  // user_payload: any [] = []; 

  // comment_info: any = {};
  // comment: any;

  // addComment() {
  //   let id  = this.data.food_id;
  //   this.comment_info.food_id = id;
  //   this.comment_info.food_comment = this.comment;


  //   this.ds.sendApiRequest("addComment/" + id, this.comment_info).subscribe((data: { payload: any; }) => {

  //   });
  // }
  
  foods: any[]=[];

  pullFoodFeatured(){
    this.ds.sendApiRequest("foodfeatured/", null).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;
    console.log(this.foods);
    })
  }

  // food_info: any = {};
  // food_payload: any [] = []; 

  // food_name: any;
  // food_price: any;
  // food_description: any;

  // pullSize() {
  //   this.food_info.size_id = this.data.size_id;

  //   this.ds.sendApiRequest("foodfeatured", this.data.size_id).subscribe((data: { payload: any; }) => {
  //   this.food_payload = data.payload;
    
  //   this.food_name = this.food_payload[0].food_name;
  //   this.food_price = this.food_payload[0].food_price;
  //   this.food_description = this.food_payload[0].food_description;
  //   }
  //   )
  // }
}
