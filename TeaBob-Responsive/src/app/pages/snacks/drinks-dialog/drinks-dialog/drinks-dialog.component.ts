import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drinks-dialog',
  templateUrl: './drinks-dialog.component.html',
  styleUrls: ['./drinks-dialog.component.css'],
})
export class DrinksDialogComponent implements OnInit {
  user_id = localStorage.getItem('UID');
  item: any;

  isDisabled: boolean = true;

  constructor(
    private router: Router,
    private ds: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
    this.pullSize();
    this.pullAddOnsDrinks();
    sessionStorage.removeItem('price');
    sessionStorage.removeItem('addonname');
    sessionStorage.removeItem('productsize');
  }

  userinfo: any = {};
  user: any;
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem('id');
    this.ds
      .sendApiRequest('users', localStorage.getItem('id'))
      .subscribe((data: { payload: any }) => {
        this.user = data.payload;
      });
  }

  foodinfo: any = {};
  foods: any[] = [];

  food_name: any;
  food_price: number = 0;
  food_stocks: number = 0;
  food_qty: number = 1;
  food_total: number = 0;

  pullFood_perItem() {
    this.userinfo.user_id = localStorage.getItem('id');
    this.foodinfo.food_id = this.data.food_id;
    this.ds
      .sendApiRequest('food_item/', this.foodinfo.food_id).subscribe((data: { payload: any }) => {
        this.foods = data.payload;

        this.food_name = this.foods[0].food_name;
        this.food_price = this.foods[0].food_price;
        this.food_stocks = this.foods[0].food_stocks;
        this.food_total = this.food_price;
      });
  }

  addon: any;

  pullAddOnsDrinks() {
    this.ds
      .sendApiRequest('pullAddOnsDrinks', null)
      .subscribe((data: { payload: any }) => {
        this.addon = data.payload;
      });
  }

  size: any;

  pullSize() {
    this.ds
      .sendApiRequest('pullSize', null)
      .subscribe((data: { payload: any }) => {
        this.size = data.payload;
      });
  }

  addOnChecker: boolean = false;
  addOnArray: any[] = [];
  priceArr: any[] = [];

  onChangeDemo(event: MatCheckboxChange, name: any, pricey: any) {

    if (this.selectedSizeName) {
      let price: any = parseInt(event.source.value);
      if (event.checked) {
        this.priceArr.push(pricey);
        if (this.priceArr.length < 1) {
          price = this.priceArr.reduce((a, b) => a + b, 0);
        }

        this.food_total = this.food_total + price * this.food_qty;
        this.addOnChecker = true;
        this.addOnArray.push(name);
        sessionStorage.setItem('price', this.priceArr.reduce((a, b) => a + b, 0)
        );
      } else {
        this.food_total = this.food_total - price * this.food_qty;
        this.priceArr = [];
        let newPrice: any = sessionStorage.getItem('price');

        let lastPrice: any = parseInt(newPrice) - parseInt(pricey);

        sessionStorage.removeItem('price');

        sessionStorage.setItem('price', lastPrice);
        if (this.addOnArray) {
          let i = this.addOnArray.indexOf(name);
          this.addOnArray.splice(i, 1);
          this.addOnChecker = false;
        }
      }
      let arr = this.addOnArray.toString()
      sessionStorage.setItem('addonname', arr)
    } else {
      this.openSnackBar('Please Choose Size First');
    }

  }

  selectedSizePrice: any;
  selectedSizeName: any;
  selectedSizeId: any;

  selectChangeHandlerSize(event: any) {
    this.isDisabled = false;
    this.selectedSizePrice = event.target.value.split(',')[0];
    this.selectedSizeName = event.target.value.split(',')[1];
    this.selectedSizeId = event.target.value.split(',')[2];

    let checkboxadddonsPrice: any = sessionStorage.getItem('lastPrice');
    if (this.addOnChecker) {
      if (this.selectedSizePrice == 0) {
        this.food_total =
          this.food_total +
          (parseInt(this.selectedSizePrice) + checkboxadddonsPrice);
      } else {
        let i = 0;
        for (i = 0; i < this.size.length; i++) {
          if (this.selectedSizeName == ' ' + this.size[i].size_name) {
            let j: any = sessionStorage.getItem('price');

            this.food_total =
              this.food_price + this.size[i].size_price + parseInt(j);
          }
        }

        sessionStorage.setItem('productsize', this.selectedSizePrice);

        this.food_total = this.food_total - parseInt(this.selectedSizePrice);
      }

      this.food_total =
        this.food_total -
        checkboxadddonsPrice +
        parseInt(this.selectedSizePrice);
    } else {
      this.food_total =
        this.food_qty * this.food_price +
        this.food_qty * parseInt(this.selectedSizePrice);
    }
    this.sendMessage();
  }

  plusQty = () => {
    this.food_qty += 1;
    if (this.food_qty > this.food_stocks) {
      this.food_qty -= 1;
    } else {


      if (this.addOnArray.length > 0) {
        let price: any = sessionStorage.getItem('price');
        this.food_total = (parseInt(this.selectedSizePrice) * this.food_qty) + (this.food_qty * this.food_price) + (parseInt(price) * this.food_qty);
      } else {

        this.food_total = (this.food_qty * this.food_price) + (this.food_qty * parseInt(this.selectedSizePrice));
      }


    }
  };

  minusQty = () => {
    if (this.food_qty > 1) {
      this.food_qty -= 1;
    }

    if (this.addOnArray.length) {
      
      let price: any = sessionStorage.getItem('price');

      this.food_total = (parseInt(this.selectedSizePrice)*this.food_qty) + this.food_qty * this.food_price + parseInt(price) * this.food_qty;
    } else {

    

      this.food_total =
        (this.food_qty * this.food_price) +
        this.food_qty * parseInt(this.selectedSizePrice);
    }
  };

  prodInfo: any = {};
  cocodeInfo:any = {};
  food_update:any = {};
  info: any;
  item_size: any;



  addToCart() {

    if(this.food_stocks == 0){
      Swal.fire(this.food_name,"out of Stock")
    }else{

    let addons: any = sessionStorage.getItem('addonname');

    this.prodInfo.user_id = localStorage.getItem('id');
    this.prodInfo.food_id = sessionStorage.getItem('prod_Id');
    this.prodInfo.food_name = this.food_name;
    this.prodInfo.price = this.food_price;
    this.prodInfo.food_quantity = this.food_qty;
    this.prodInfo.cart_total_price = this.food_total;
    this.prodInfo.cart_addon_name = addons;
    this.prodInfo.size_price = this.selectedSizePrice;
    this.prodInfo.size_name = this.selectedSizeName;
    this.prodInfo.size_id = this.selectedSizeId;

    this.ds.sendApiRequest('addCart/', this.prodInfo).subscribe((data: any) => {
      if (data.remarks === 'success') {
        Swal.fire('Great!', 'Added to cart successfully!', 'success');
        this.dialog.closeAll();
      }
    });
  }
}


code: any;
remarks: any;
async CheckoutOneItem() {

  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Landmark Near You',
    inputPlaceholder: 'Ex: color of gate, near school, etc.',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })

  if (text) {
    this.remarks = text;

    var seq = Math.floor(100000000 + Math.random() * 900000000).toString().substring(1)
  this.code = seq



  //checkout info
    let addons: any = sessionStorage.getItem('addonname');
    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.prod_name = this.food_name;
    this.prodInfo.prod_price = this.food_price;
    this.prodInfo.food_quantity = this.food_qty;
    this.prodInfo.cart_addon_name = addons;
    this.prodInfo.size_name = this.selectedSizeName;
    this.prodInfo.code = this.code;
    // this.prodInfo.cart_total_price = this.food_total;
    // this.prodInfo.food_id = sessionStorage.getItem("prod_Id");

    //cocode info
    this.cocodeInfo.code = this.code;
    this.cocodeInfo.user_name = localStorage.getItem("Fullname")
    this.cocodeInfo.user_id = localStorage.getItem("id")
    this.cocodeInfo.user_contact = localStorage.getItem('user_Contact')
    this.cocodeInfo.user_address = localStorage.getItem('user_Address')
    this.cocodeInfo.total_price = this.food_total;
    this.cocodeInfo.remarks = this.remarks;

    
      // update food stocks
      let id  =  this.data.food_id;

      this.foodinfo.food_id =  id;
      this.foodinfo.food_stocks =  this.food_stocks - this.food_qty;

    this.ds.sendApiRequest('CheckoutOneItem/', this.prodInfo).subscribe((data: any) => {
      if (data.remarks === "success"){
        Swal.fire(
          'Great!',
          'Successfully Checked Out!',
          'success'
        )
        Swal.fire({
          title: 'Scan this QR Code You can pay via G-Cash',
          text: 'Dont forget to save your Receipt and show it to the Delivery Rider',
          imageUrl: './assets/gcash.jpg',
          imageWidth: 400,
          imageHeight: 450,
          imageAlt: 'Custom image',
        })
        this.dialog.closeAll();
      }
    });

    this.ds.sendApiRequest('CheckoutCodeOneItem/', this.cocodeInfo).subscribe((data: any) => {});

    this.ds.sendApiRequest('UpdateStocksOneItem/' + id, this.foodinfo).subscribe((data: any) => {});
    
  
  
  }
} 

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!');
  }
  

  openSnackBar(message: string) {
    this._snackBar.open('Please Choose Size', 'Close', { duration: 2000 });
  }
}
