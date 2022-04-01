import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conclude-order',
  templateUrl: './conclude-order.page.html',
  styleUrls: ['./conclude-order.page.scss'],
})
export class ConcludeOrderPage implements OnInit {

  viewOrder:any;

  user_address:any;
  user_name:any;
  user_contact:any;
  date:any;
  code:any;
  total_price:any;

  orderAccepted: any;

  cocode_id:number;

  selectedValue: any;
  remarks: any;

  constructor(private toast: ToastController,private router: Router, public ds: DataService, private us: UserService, private alert: AlertController ) { 

    this.viewOrder = this.router.getCurrentNavigation().extras.state;


    
    this.user_address = this.viewOrder.user_address;
    this.remarks = this.viewOrder.remarks;
    this.user_name = this.viewOrder.user_name;
    this.user_contact = this.viewOrder.user_contact;
    this.date = this.viewOrder.date;
    this.code = this.viewOrder.code;
    this.total_price = this.viewOrder.total_price;

    // ID of tbl_cocode for updating
    this.cocode_id = this.viewOrder.cocode_id;

  }

  ngOnInit() {
  }

  
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  async presentAlert(msg) {
    const alert = await this.alert.create({
      cssClass: 'alert-class',
      header: 'Confirm Delivery?',
      subHeader: '',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.confirmDelivery('cancelled');
          }
        }, {
          text: 'Accept',
          handler: () => {
            this.confirmDelivery('delivered');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertRadio() {
    const alert = await this.alert.create({
      header: 'Cancel Order',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Vehicle malfunction',
          value: 'Vehicle malfunction',
          handler: (data) => {
           this.selectedValue = data.value;
          }
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'No response from customer',
          value: 'No response from customer',
          handler: (data) => {
            this.selectedValue = data.value;
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Order took too long',
          value: 'Order took too long',
          handler: (data) => {
           this.selectedValue = data.value;
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Wrong order',
          value: 'Wrong order',
          handler: (data) => {
           this.selectedValue = data.value;
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Other',
          value: 'Other',
          handler: (data) => {
           this.selectedValue = data.value;
          }
        }       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.cancelDelivery('cancelled');;
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.cancelDelivery('confirmed');;
          }
        }
      ]
    });

    await alert.present();
  }

  confirmConfirm()
  {
    this.presentAlert("Would you like to conclude this order? The admin will be notified that the order has been successfully delivered.");
  }

  confirmCancel()
  {
    this.presentAlertRadio();
  }

  confirmDelivery(isDelivered: any)
{

  if(isDelivered=="delivered")
  {

    this.ds.sendApiRequest("confirmDelivery", 
    {
     cocode_id:this.cocode_id,
     is_approved: 4, 
    }
    ).subscribe((data: { payload: any }) => {
      if(data.payload){
        this.ds.sendApiRequest("updateDriverStatus", 
        {
         driver_id:localStorage.getItem('Driver_id'),
         driver_status: 0,
        }
        ).subscribe((data: { payload: any }) => {

        });
      }
    });
    
    this.presentToast("Order Delivered Successfully.");
    this.router.navigate(['/delivery-history']);
  }
}

cancelDelivery(isCancelled: any)
{
  
  if(isCancelled=="confirmed")
  {

      
      this.ds.sendApiRequest("cancelDelivery", 
      {
       cocode_id:this.cocode_id,
       is_approved: 2,
       remarks: this.selectedValue,
       driver: this.us.getDriver()
      }
      ).subscribe((data: { payload: any }) => {
        
      });
      this.presentToast("Delivery Cancelled.");
      this.router.navigate(['/delivery-history']);
    
  }

  }


}

