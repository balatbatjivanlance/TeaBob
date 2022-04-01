import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  viewOrder:any;

  user_address:any;
  user_name:any;
  user_contact:any;
  date:any;
  code:any;
  total_price:any;

  orderAccepted: any;

  cocode_id:number;
  remarks: any;
  

  constructor(private toast: ToastController, private router: Router, public ds: DataService, private alert: AlertController, private us: UserService ) {

    this.viewOrder = this.router.getCurrentNavigation().extras.state;
    
    this.user_address = this.viewOrder.user_address;
    this.remarks = this.viewOrder.remarks;
    this.user_name = this.viewOrder.user_name;
    this.user_contact = this.viewOrder.user_contact;
    this.date = this.viewOrder.date;
    this.code = this.viewOrder.code;
    this.total_price = this.viewOrder.total_price;

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
      header: 'Accept Delivery?',
      subHeader: '',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.acceptOrder('cancelled');
          }
        }, {
          text: 'Accept',
          handler: () => {
            this.acceptOrder('accepted');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  confirmAccept()
  {
    this.presentAlert("Once you accept this order, you won't be able to accept other orders until you fulfill the order.");
  }

  acceptOrder(option: any)
  {
    if(option=="accepted")
    {
      this.ds.sendApiRequest("acceptOrder", 
      {
       cocode_id:this.cocode_id,
       is_approved: 3,
       driver: this.us.getDriver(),
      }
      ).subscribe((data: { payload: any }) => {

        if(data.payload){
          this.ds.sendApiRequest("updateDriverStatus", 
          {
           driver_id:localStorage.getItem('Driver_id'),
           driver_status: 1,
          }
          ).subscribe((data: { payload: any }) => {

          });
        }
      });

      this.presentToast("Delivery Accepted Successfully.");
      this.router.navigate(['/conclude-order'], {state: this.viewOrder});
    }
  }


}


