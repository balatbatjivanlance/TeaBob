import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ds: DataService, public dialog:MatDialog,
    route:ActivatedRoute, ) { }

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


  prod_name: any;
  prod_category: any;
  prod_price: any;
  prod_description : any;
  prodInfo : any = {};


  addProducts() {

    this.prodInfo.prod_name = this.prod_name;
    this.prodInfo.prod_description = this.prod_description;
    this.prodInfo.prod_category = this.prod_category = this.selectedCateg;
    this.prodInfo.prod_price  = this.prod_price;
    this.prodInfo.prod_img = this.imgSrc;


    this.ds.sendApiRequest("addProducts", JSON.parse(JSON.stringify(this.prodInfo))).subscribe((data: any) => {
      // this.pullProducts()

      this.prod_name = '';
      this.prod_description = '';
      this.prod_category = '';
      this.prod_price = '';
      this.imgSrc = '';
    });

    console.log(this.prodInfo)

  }


}
