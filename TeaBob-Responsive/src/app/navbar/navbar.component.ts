import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public router: Router, private ds: DataService) { }

  ngOnInit(): void {
    this.pullCart();
  }

  
  cartinfo: any={};
  cart:any[] = [];
  cartCounter: number = 0;
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("counter/",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.cart = data.payload;

    for (let i = 0; i <= this.cart.length; i++) {
      this.cartCounter = i;
      console.log(this.cartCounter);
    }

    })
  }

  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.router.navigate(['/login']);
}

}
