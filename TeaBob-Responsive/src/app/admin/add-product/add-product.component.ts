import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private ds: DataService,public router: Router, public dialog:MatDialog,
    route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pullProduct();
    this.pullCategory();
  }

  user_role = localStorage.getItem("user_role");


  // SIDENAV AND TOOLBAR CODE 

  showFiller = false;
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 769) {
        return true;
    } else {
        return false;
    }
  }
  
  
  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.router.navigate(['/login']);
}


  
  product: any;
  

  pullProduct(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.product = data.payload;

    // console.log(this.product)
    })
  
  }

  category: any;

  pullCategory(){
    this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
    this.category = data.payload;

    // console.log(this.category)
    })
  
  }

  selectedCategactive: string = '';

  selectChangeHandleractive (event: any){
    this.selectedCategactive = event.target.value;

    // console.log(this.selectedCategactive);
  }


  selectedCategfeatured: string = '';

  selectChangeHandlerfeatured (event: any){
    this.selectedCategfeatured = event.target.value;

    // console.log(this.selectedCategfeatured);
  }


  selectedCateg: string = '';

  categval = true;

  selectChangeHandler (event: any){
    this.selectedCateg = event.target.value;

    // console.log(this.selectedCateg);

    // if (this.selectedCateg == '24')
    // {
    //   this.categval = false
    // }
    // else{
    // this.categval = true
    // }
  }

  selectedCategAddon: string = '';

  // categval = true;

  selectChangeHandlerAddon (event: any){
    this.selectedCategAddon = event.target.value;

    // console.log(this.selectedCategAddon);

    // if (this.selectedCateg == '24')
    // {
    //   this.categval = false
    // }
    // else{
    // this.categval = true
    // }
  }

  imgSrc: string = "../../../assets/logo1.jpeg";
  onUploadHandler(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
        this.imgSrc = event.target.result;
        // console.log(this.imgSrc);
      }
    }
  }


  food_name: any;
  food_categoryactive: any;
  food_categoryfeatured: any;
  food_category: any;
  food_price: any;
  food_stocks: any;
  food_description : any;

  food_Info : any = {};


  addProducts() {

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Add Successfully!',
          'Your product has been added.',
          'success'
        )
        this.food_Info.food_name = this.food_name;
        this.food_Info.food_description = this.food_description;
        this.food_Info.food_active = this.food_categoryactive = this.selectedCategactive;
        this.food_Info.food_featured = this.food_categoryfeatured = this.selectedCategfeatured;
        this.food_Info.category_id = this.food_category = this.selectedCateg;
        this.food_Info.food_price  = this.food_price;
        this.food_Info.food_stocks  = this.food_stocks;
        this.food_Info.food_image_name = this.imgSrc;
    
        this.ds.sendApiRequest("addProducts", JSON.parse(JSON.stringify(this.food_Info))).subscribe((data: any) => {
      
          this.router.navigate(['/manage-product']);
        });
      }
     
    })


  }

  addon_name: any;
  addon_price: any;
  addon_stocks: any;
  addon_category: any;

  Addon_Info : any = {};
  AddOns() {

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/manage-addons']);
        Swal.fire(
          'Add Successfully!',
          'Your product has been added.',
          'success'
        )
        this.Addon_Info.addon_name = this.addon_name;
        this.Addon_Info.addon_stocks = this.addon_stocks;
        this.Addon_Info.addon_price  = this.addon_price;
        this.Addon_Info.category_id = this.addon_category = this.selectedCategAddon;
    
        this.ds.sendApiRequest("AddOns", JSON.parse(JSON.stringify(this.Addon_Info))).subscribe((data: any) => {
      
        });
      }
     
    })


  }

  // addon_name: any;
  // addon_price: any;
  // addon_stocks: any;
  
  size_name: any;
  size_price: any;
  size_stocks: any;
  // var_size: any;
  size_Info : any = {};
  AddSize() {

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/manage-addons']);
        Swal.fire(
          'Add Successfully!',
          'Your product has been added.',
          'success'
        )
        this.size_Info.size_name = this.size_name;
        this.size_Info.size_stocks = this.size_stocks;
        this.size_Info.size_price  = this.size_price;
    
        this.ds.sendApiRequest("AddSize", JSON.parse(JSON.stringify(this.size_Info))).subscribe((data: any) => {
      
        });
      }
     
    })


  }



}
