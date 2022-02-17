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
     this.pullFoodDetails();
     this.pullCategory();

  }
  user_role = localStorage.getItem("user_role");



  foodinfo: any = {};
  food_payload: any [] = []; 

  food_name: any;
  food_active: any;
  food_featured: any;
  food_category: any;
  food_price: any;
  food_stocks: any;
  food_description : any;

  pullFoodDetails() {
    this.foodinfo.food_id = this.data.food_id;

    this.ds.sendApiRequest("pullFoodDetails", this.data.food_id).subscribe((data: { payload: any; }) => {
    this.food_payload = data.payload;
    
    this.food_name = this.food_payload[0].food_name;
    this.food_price = this.food_payload[0].food_price;
    this.food_stocks = this.food_payload[0].food_stocks;
    this.food_description = this.food_payload[0].food_description;
    // this.food_category = this.food_payload[0].food_category;
    // this.food_active = this.food_payload[0].food_active;
    // this.food_featured = this.food_payload[0].food_featured;
    }
    )
  }

  
  category: any;

  pullCategory(){
    this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
    this.category = data.payload;

    console.log(this.category)
    })
  
  }

  selectedCategactive: string = '';

  selectChangeHandleractive (event: any){
    this.selectedCategactive = event.target.value;

    console.log(this.selectedCategactive);
  }


  selectedCategfeatured: string = '';

  selectChangeHandlerfeatured (event: any){
    this.selectedCategfeatured = event.target.value;

    console.log(this.selectedCategfeatured);
  }

  

  imgSrc: string = "../../../assets/logo1.jpeg";
  onUploadHandler(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
        this.imgSrc = event.target.result;
        console.log(this.imgSrc);
      }
    }
  }

  updateFood() {
   
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id  = this.data.food_id;

        this.foodinfo.food_id =  id;
        this.foodinfo.food_name = this.food_name;
        this.foodinfo.food_description = this.food_description;
        this.foodinfo.food_active = this.food_active = this.selectedCategactive;
        this.foodinfo.food_featured = this.food_featured = this.selectedCategfeatured;
        this.foodinfo.category_id = this.food_category;
        this.foodinfo.food_price  = this.food_price;
        this.foodinfo.food_stocks  = this.food_stocks;
        this.foodinfo.food_image_name = this.imgSrc;

    this.ds.sendApiRequest("updateFood/" + id, this.foodinfo).subscribe((data: { payload: any; }) => {});

        // Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }


  // updatefood: any;
  // updateFood(){
  //       this.ds.sendApiRequest("updatefood", null).subscribe((data: { payload: any; }) => {
  //       this.updatefood = data.payload;
      
  //     console.log(this.updatefood);
  //   })
  // }
}
