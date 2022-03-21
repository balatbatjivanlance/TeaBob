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

  //gawa ka variable
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

  //element's variable sa baba
  //mga need mo madisplay sa frontend
  

  constructor(private toast: ToastController, private router: Router, public ds: DataService, private alert: AlertController, private us: UserService ) {

    

    
    // console.log(this.router.getCurrentNavigation().extras.state); 

    // tas yung variable na nagawa mo ganto gawin mo
    this.viewOrder = this.router.getCurrentNavigation().extras.state;


    //Since di siya pwede maforloop
    //yung mga elements na need mo madisplay gawan mo nalang siguro ng variables bawat isa
    //kunyare variable.

    console.log(this.viewOrder);
    
    this.user_address = this.viewOrder.user_address;
    this.remarks = this.viewOrder.remarks;
    this.user_name = this.viewOrder.user_name;
    this.user_contact = this.viewOrder.user_contact;
    this.date = this.viewOrder.date;
    this.code = this.viewOrder.code;
    this.total_price = this.viewOrder.total_price;

    // ID ng tbl_cocode for updating
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
    console.log(option);
    if(option=="accepted")
    {
      // this.ds.sendApiRequest("acceptOrder", 
      // {
       
      // }
      // ).subscribe((data: { payload: any }) => {
        
      //   )};
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


