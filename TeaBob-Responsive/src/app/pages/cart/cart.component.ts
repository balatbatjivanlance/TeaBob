import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  status: number = 0

  message: any
  private subs: Subscription

  constructor(
    private ds: DataService,
    public dialog: MatDialog,
    public router: Router,
    route: ActivatedRoute,
  ) {
    this.subs = this.ds.getUpdate().subscribe((message) => {
      this.message = message
      route.params.subscribe((val) => {
        this.ngOnInit()
      })
    })
  }

  async ngOnInit() {
    await this.pullCart()
  }
  user_role = localStorage.getItem('user_role')

  // SIDENAV AND TOOLBAR CODE

  showFiller = false
  sidenav!: MatSidenav
  isExpanded = true
  showSubmenu: boolean = false
  isShowing = false
  showSubSubMenu: boolean = false

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false
    }
  }

  isLargeScreen() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    if (width > 769) {
      return true
    } else {
      return false
    }
  }

  logout() {
    localStorage.clear()
    window.localStorage.removeItem('id')
    this.router.navigate(['/login'])
  }

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE

  cartinfo: any = {}
  cart_payload: any[] = []
  cartCounter: number = 0
  delCarts: any = {}

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem('id')
    this.ds
      .sendApiRequest('cart/' + localStorage.getItem('id'), null)
      .subscribe((data: { payload: any }) => {
        this.cart_payload = data.payload
        console.log('cart_payload', this.cart_payload)
        this.getTotal()

        // if(this.cart != null){

        // for (let i = 0; i <= this.cart_payload.length; i++) {
        //   this.cartCounter = i;
        //   console.log(this.cartCounter);
        // }
      })
  }



  prodinfo: any = {}

  async delCart(e: any) {
    this.prodinfo.cart_id = e
    await this.ds
      .sendApiRequest('delCarts', this.prodinfo)
      .subscribe((data: any) => {})
    Swal.fire('Deleted', 'Successfully Removed From Cart!', 'success')
    this.pullCart()
    window.location.reload();
  }

  code: any
  checkOut() {
    var seq = Math.floor(100000000 + Math.random() * 900000000)
      .toString()
      .substring(1)
    this.code = seq

    console.log(this.code)
  }

  totalamount = 0

  getTotal() {
    let total = 0
    if (this.cart_payload != null) {
      for (var i = 0; i < this.cart_payload.length; i++) {
        if (this.cart_payload[i].price) {
          // get total amount of the products inside the cart items
          total += this.cart_payload[i].cart_total_price
          this.totalamount = total
        }
      }

      return this.totalamount
    }
  }




  coInfo: any = {}
  coCode: any = {}

  cart_id: any

  remarks: any;
  async checkOutAll() {

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
      // Swal.fire(text)
      this.remarks = text;

        var seq = Math.floor(100000000 + Math.random() * 900000000)
          .toString()
          .substring(1)
        this.code = seq

        let data: any = []

        this.cart_payload.forEach(item =>  {
          this.coInfo.prod_name = item.food_name
          this.coInfo.cart_addon_name = item.cart_addon_name
          this.coInfo.size_name = item.size_name
          // this.coInfo.add_pearl = item.add_pearl
          // this.coInfo.add_cpuff = item.add_cpuff
          // this.coInfo.add_ccheese = item.add_ccheese
          // this.coInfo.add_cookie = item.add_cookie
          // this.coInfo.add_sauce = item.add_sauce
          // this.coInfo.add_spicy = item.add_spicy
          this.coInfo.food_quantity = item.food_quantity
          this.coInfo.user_id = localStorage.getItem('id')
          this.coInfo.food_id = item.food_id
          this.coInfo.size_id = item.size_id
          this.coInfo.prod_price = item.cart_total_price
          this.coInfo.user_name = localStorage.getItem('Fullname')
          this.coInfo.user_contact = localStorage.getItem('user_Contact')
          this.coInfo.user_address = localStorage.getItem('user_Address')
          this.coInfo.total_price = this.totalamount
          this.coInfo.code = this.code
          this.coInfo.cart_id = item.cart_id
          this.coInfo.remarks = this.remarks;

          this.coInfo.food_stocks = item.food_stocks
          this.coInfo.size_stocks = item.size_stocks
          // this.coInfo.addon_stocks = item.addon_stocks - item.food_quantity;
          // console.log(this.coInfo.size_stocks)
          // console.log(this.coInfo.addon_stocks)
          Swal.fire('Great!', 'Check out successfully!', 'success')

          {
            data.push(this.coInfo)

            this.coInfo = {}
          }
        })

        this.ds.sendApiRequest('placeOrder/', data).subscribe((data: any) => {})
        this.router.navigate(['/status']);
        console.log(this.coInfo.food_id)
      }
    }

  



  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}

  // food_info: any = {}
  // deleteAddOnsPearl = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_pearl = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }

  // deleteAddOnsCpuff = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_cpuff = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }

  // deleteAddOnsCcheese = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_ccheese = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }

  // deleteAddOnsCookie = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_cookie = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }

  // deleteAddOnsSauce = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_sauce = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }

  // deleteAddOnsSpicy = (id: any) => {
  //   this.food_info.cart_id = id
  //   this.food_info.add_spicy = 'none'
  //   this.ds
  //     .sendApiRequest('removeAddOns/', this.food_info)
  //     .subscribe((data: any) => {})
  //   Swal.fire('Removed', 'Add Ons Removed!', 'success')
  //   this.sendMessage()
  // }


    // coInfo: any = {}
  // coCode: any = {}

  // cart_id: any

  // checkOutAll() {
  //   // this.cartinfo.user_id = localStorage.getItem("id");
  //   // this.cartinfo.user_name = localStorage.getItem("Fullname");
  //   // this.cartinfo.user_contact = localStorage.getItem("user_Contact");
  //   // this.cartinfo.user_address = localStorage.getItem("user_Address");
  //   // this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe(data =>
  //   // {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Please enter the checkout button to continue",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Check out',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Your cart was addedd to orders!', 'Success, please order again.', 'success')
  //       var seq = Math.floor(100000000 + Math.random() * 900000000)
  //         .toString()
  //         .substring(1)
  //       this.code = seq

  //       let data: any = []

  //       this.cart_payload.forEach(item =>  {
  //         this.coInfo.prod_name = item.food_name
  //         this.coInfo.add_pearl = item.add_pearl
  //         this.coInfo.add_cpuff = item.add_cpuff
  //         this.coInfo.add_ccheese = item.add_ccheese
  //         this.coInfo.add_cookie = item.add_cookie
  //         this.coInfo.add_sauce = item.add_sauce
  //         this.coInfo.add_spicy = item.add_spicy
  //         this.coInfo.food_quantity = item.food_quantity
  //         this.coInfo.user_id = localStorage.getItem('id')
  //         this.coInfo.prod_price = item.cart_total_price
  //         this.coInfo.user_name = localStorage.getItem('Fullname')
  //         this.coInfo.user_contact = localStorage.getItem('user_Contact')
  //         this.coInfo.user_address = localStorage.getItem('user_Address')
  //         this.coInfo.total_price = this.totalamount
  //         this.coInfo.code = this.code
  //         this.coInfo.cart_id = item.cart_id
  //         Swal.fire('Great!', 'Check out successfully!', 'success')

  //         {
  //           data.push(this.coInfo)

  //           this.coInfo = {}
  //         }
  //       })

  //       this.ds.sendApiRequest('placeOrder/', data).subscribe((data: any) => {})
  //       this.router.navigate(['/status']);
  //     }
  //   })

  // }

