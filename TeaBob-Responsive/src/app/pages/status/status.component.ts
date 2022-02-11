import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { OrdersModalComponent } from 'src/app/orders-modal/orders-modal.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: string | undefined;
  
  user_id = localStorage.getItem("UID");

  message: any;
  private subs: Subscription;
  data: any;
  
  constructor(private ds: DataService, route:ActivatedRoute, public dialog: MatDialog,public router: Router ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

  ngOnInit(): void {
    
    this.pullUsers();
    this.pullStatus();
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



  userinfo: any = {};
  user: any;
  
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users/",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;
    }
    )
  }

  
  status_payload: any [] = []; 

  is_approved: any;

  pullStatus() {
    this.ds.sendApiRequest("status/", localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.status_payload = data.payload;
    
    console.log(this.is_approved)
    }
    )
  }

  // cancelorder: any = {};

  // cancelOrder = (id:any) => {

  //        Swal.fire({
  //     title: 'Are you sure to cancel your orders?',
  //     showDenyButton: true,
  //     confirmButtonText: 'Yes!',
  //     denyButtonText: `No!`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //   this.cancelorder.cocode_id = id;
  //   this.cancelorder.is_approved = 2;
  //   this.ds.sendApiRequest('cancelOrder/', this.cancelorder).subscribe((data: any) => { });

  //   this.sendMessage();
    
  //       Swal.fire('Order Cancelled', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Thank you for your fast update', '', 'info')
  //     }
  //   })
  //    this.dialog.closeAll();
  // }

  cancelorder: any = {};
  remarks: any;

  cancelOrder = async (id:any) => {

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Reason of Cancellation?',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      // Swal.fire(text)
      this.remarks = text;

      this.cancelorder.cocode_id = id;
      this.cancelorder.is_approved = 2;
      this.cancelorder.remarks = this.remarks;
      this.ds.sendApiRequest('cancelOrder/', this.cancelorder).subscribe((data: any) => { });
  
      this.sendMessage();
      Swal.fire('Saved!', '', 'success')
    }


    
  }

  deleteorder: any = {};

  deleteOrder = (id:any) => {

         Swal.fire({
      title: 'Are you sure to delete your orders?',
      showDenyButton: true,
      confirmButtonText: 'Yes!',
      denyButtonText: `No!`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
    this.deleteorder.cocode_id = id;
    this.deleteorder.is_approved = 5;
    this.ds.sendApiRequest('deleteOrder/', this.deleteorder).subscribe((data: any) => { });

    this.sendMessage();
    
        Swal.fire('Order Deleted', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Thank you for your fast update', '', 'info')
      }
    })
     this.dialog.closeAll();
  }

  // cancelOrder() {
    
  //    Swal.fire({
  //     title: 'Are you sure to cancel your orders?',
  //     showDenyButton: true,
  //     confirmButtonText: 'Yes!',
  //     denyButtonText: `No!`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       let id  = localStorage.getItem("id");
 
  //   this.cancelorder.user_id =  id;
  //   this.cancelorder.is_approved =  2;
  //    this.ds.sendApiRequest("cancelOrder/" + id, this.cancelorder).subscribe((data: { payload: any; }) => {});
  //    this.sendMessage();

  //       Swal.fire('Order Cancelled', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Thank you for your fast update', '', 'info')
  //     }
  //   })
  //    this.dialog.closeAll();
  //  }


    
  // statusModal() {
  //   const dialog = this.dialog.open(StatusDialogComponent, {
  //     autoFocus: false, width:"70%", height:"60%"
  //   });
  //   dialog.afterClosed().subscribe( ()=>{
  //     console.log("closed")
  //   });
  
  // }

 

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }


  openCorBreakDown(status: any) {
    // console.log(code);
    const dialogRef = this.dialog.open(OrdersModalComponent , {
      height: '80%',
      width: '70%',
      data: 
      status
    });
  }

  orderInfo: any  = {};

  async delorder(e:any) {
    this.orderInfo.cocode = e;

        this.ds.sendApiRequest("delOrder", JSON.parse(JSON.stringify(this.orderInfo))).subscribe((data: any) => {
          alert('Order Removed');
          // this.pullOrders();
        });

  }




}
