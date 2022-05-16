import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ModalController } from '@ionic/angular';
import { UpdateProfilePage } from './update-profile/update-profile.page';
import { ChangepasswordPage } from './changepassword/changepassword.page';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  modalDataResponse: any;

  constructor(public us: UserService, public ds: DataService, private _router: Router,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.pullDriverUpdate();
  }

  driverinfo: any = {};
  driver: any;
  
  pullDriverUpdate() {
    this.driverinfo.driver_id = localStorage.getItem("Driver_id");
    this.ds.sendApiRequest("pullDriverUpdate/",localStorage.getItem("Driver_id")).subscribe((data: { payload: any; }) => {
    this.driver = data.payload;
    }
    )
  }

  async ProfileUpdate(){
    const modal = await this.modalCtrl.create({
      component: UpdateProfilePage,
      componentProps: {
        'name': 'Profile Update'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async ChangePassDriver(){
    const modal = await this.modalCtrl.create({
      component: ChangepasswordPage,
      componentProps: {
        'name': 'Change Password'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

}
