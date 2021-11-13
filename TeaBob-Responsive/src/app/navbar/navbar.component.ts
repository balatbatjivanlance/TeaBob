import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullCart();
  }

  
  cartinfo: any={};
  cart:any;
  cartCounter: any;
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.cart = data.payload;

    // this.getTotal();

    // if(this.cart != null){

    for (let i = 0; i <= this.cart.length; i++) {
      this.cartCounter = i;
      console.log(this.cartCounter);
    }
    }
    )
  }

}
