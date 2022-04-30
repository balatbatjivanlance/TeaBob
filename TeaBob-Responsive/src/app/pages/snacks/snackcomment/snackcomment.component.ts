import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-snackcomment',
  templateUrl: './snackcomment.component.html',
  styleUrls: ['./snackcomment.component.css']
})
export class SnackcommentComponent implements OnInit {

  constructor(private router: Router,private ds: DataService, @Inject(MAT_DIALOG_DATA)public data: any, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
    this.pullComment();
  }


  userinfo: any = {};
  user: any;
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;

    }
    )
  }


  foodinfo: any = {};
  foods: any []=[];

  food_name: any;
  food_price: number = 0;
  food_stocks: number = 0;
  food_qty: number = 1;
  food_total: number  = 0 ;
  food_image_name: any;


  pullFood_perItem() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.foodinfo.food_id = this.data.food_id
    this.ds.sendApiRequest("food_item/", this.foodinfo.food_id).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;

    this.food_name = this.foods[0].food_name;
    this.food_price = this.foods[0].food_price;
    this.food_stocks = this.foods[0].food_stocks;
    this.food_image_name = this.foods[0].food_image_name;
    this.food_total = this.food_price;
      // console.log(this.food_image_name)
    });

  }

  comments: any[]=[];

  pullComment(){
    this.ds.sendApiRequest("comment/", null).subscribe((data: { payload: any; }) => {
    this.comments = data.payload;
    })
  }

  com_comment: any;
  com_Info : any = {};

  AddComment() {

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/snacks']);
        Swal.fire(
          'Add Successfully!',
          'Your comment has been added.',
          'success'
        )

        this.com_Info.com_comment = this.com_comment;
        this.com_Info.user_id = localStorage.getItem("id");
        this.com_Info.food_id = sessionStorage.getItem("prod_Id");
    
        this.ds.sendApiRequest("AddComment", JSON.parse(JSON.stringify(this.com_Info))).subscribe((data: any) => {
      
        });
      }
     
    })


  }

}
