import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { SnacksDialogComponent } from './snacks-dialog/snacks-dialog/snacks-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DrinksDialogComponent } from './drinks-dialog/drinks-dialog/drinks-dialog.component';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {


  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, public dialog:MatDialog,public router: Router,
    route:ActivatedRoute, ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

  ngOnInit(): void {
    this.pullFood();
    this.pullCart();
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

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE

  
  
  food_info: any[] = [];
  category_id: any = "";
  pullFood(){
    this.ds.sendApiRequest(`food/${this.category_id}`, null).subscribe((data: { payload: any; }) => {
      this.food_info = data.payload
    })
  }
  
  filterFood = (data:any) => {
    this.category_id = data.value
    this.category_id  == 0 ? this.category_id = '' : this.pullFood();
    this.sendMessage();
  }

  category_info: any [] = [];
  pullCategory(){
    this.ds.sendApiRequest("category/", null).subscribe((data: { payload: any; }) => {
    this.category_info = data.payload;
    })
   
  }


  prodinfo: any = {};

  async delProd(e: any) {
    this.prodinfo.prod_id = e;

        this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
        });
        this.sendMessage();
  }

  prodInfo: any = {};
  title: any;
  info: any;


  addToCart(food:any) {

    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.title = food.food_name;
    this.prodInfo.description = food.description;
    this.prodInfo.price = food.price;
    this.prodInfo.quantity = food.food_quantity;
    this.prodInfo.image_name = food.image_name;
  
    this.ds.sendApiRequest("addCart/", this.prodInfo).subscribe((data: any) => { });
  }

  cartinfo: any={};
  cart:any;
  // cartCounter: any;
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
      this.cart = data.payload; 
    });
  }




  openModal(id: any, food_id: any) {
    if (id == 24) {
      const dialog = this.dialog.open(SnacksDialogComponent, {
        autoFocus: false, width:"70%", height:"70%", data:{food_id},
      });
      dialog.afterClosed().subscribe( ()=>{
      });
    }
    else if(id == 26){
      const drinksdialog = this.dialog.open(DrinksDialogComponent, {
        autoFocus: false, width:"70%", height:"70%", data: {food_id}
      });
      drinksdialog.afterClosed().subscribe( ()=>{
      });
    }
    sessionStorage.setItem('prod_Id', food_id);
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
}
