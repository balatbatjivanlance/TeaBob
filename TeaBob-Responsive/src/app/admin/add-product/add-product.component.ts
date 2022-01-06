import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
// import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private ds: DataService, public dialog:MatDialog,
    route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pullProduct();
  }
  
  product: any;
  

  pullProduct(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.product = data.payload;

    console.log(this.product)
    })
  
  }

  selectedCateg: string = '';

  selectChangeHandler (event: any){
    this.selectedCateg = event.target.value;

    console.log(this.selectedCateg);
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


  food_name: any;
  food_category: any;
  food_price: any;
  food_description : any;
  food_Info : any = {};


  addProducts() {

    this.food_Info.food_name = this.food_name;
    this.food_Info.food_description = this.food_description;
    this.food_Info.food_category = this.food_category = this.selectedCateg;
    this.food_Info.food_price  = this.food_price;
    this.food_Info.food_image_name = this.imgSrc;


    this.ds.sendApiRequest("addProducts", JSON.parse(JSON.stringify(this.food_Info))).subscribe((data: any) => {
      // this.pullProducts()

      this.food_name = '';
      this.food_description = '';
      this.food_category = '';
      this.food_price = '';
      this.imgSrc = '';
    });

    console.log(this.food_Info)

  }


  onSubmit() {

  }


}
