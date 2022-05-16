import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  constructor(public us: UserService, public ds: DataService, private _router: Router,public modalCtrl: ModalController) { }

  ngOnInit() {
    this.pullDriverUpdate();
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }

  driver_payload: any [] = []; 
  driverinfo: any = {};

  driver_name: any;
  driver_email: any;
  driver_contact: any;

  pullDriverUpdate() {
    this.ds.sendApiRequest("pullDriverUpdate/", localStorage.getItem("Driver_id")).subscribe((data: { payload: any; }) => {
    this.driver_payload = data.payload;
    
    this.driver_name = this.driver_payload[0].driver_name;
    this.driver_email = this.driver_payload[0].driver_email;
    this.driver_contact = this.driver_payload[0].driver_contact;
    
    }
    )
  }

  UpdateDriver(){
 
        let id  = localStorage.getItem("Driver_id");
  
   this.driverinfo.driver_id =  id;
   this.driverinfo.driver_name =  this.driver_name
   this.driverinfo.driver_contact = this.driver_contact
  
    this.ds.sendApiRequest("UpdateDriver/" + id, this.driverinfo).subscribe((data: { payload: any; }) => {});
    
  window.location.reload();
  }

}
