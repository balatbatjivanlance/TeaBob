import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  //gawa ka variable
  viewOrder:any;

  user_address:any;
  user_name:any;
  user_contact:any;
  date:any;
  code:any;
  total_price:any;

  //element's variable sa baba
  //mga need mo madisplay sa frontend

  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation().extras.state); 

    // tas yung variable na nagawa mo ganto gawin mo
    this.viewOrder = this.router.getCurrentNavigation().extras.state;


    //Since di siya pwede maforloop
    //yung mga elements na need mo madisplay gawan mo nalang siguro ng variables bawat isa
    //kunyare variable.
    
    this.user_address = this.viewOrder.user_address;
    this.user_name = this.viewOrder.user_name;
    this.user_contact = this.viewOrder.user_contact;
    this.date = this.viewOrder.date;
    this.code = this.viewOrder.code;
    this.total_price = this.viewOrder.total_price;


  }
  ngOnInit() {
  }



}
