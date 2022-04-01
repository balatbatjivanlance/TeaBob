import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: any;
  driver_email: any;
  driver_password: any;

  constructor(public us: UserService, public ds: DataService, public router : Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    if(this.us.isUserLoggedIn()){
      this.router.navigate(['/home']);
    }
  
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  loginDriver() {
    this.ds.sendApiRequest("getDriver", 
    {
      driver_email:this.driver_email, 
      driver_password: this.driver_password
    }
    ).subscribe((data: { payload: any }) => {
      this.login = data;

      if(this.login.status.remarks == "success")
      {
        this.us.saveDriver(this.login.payload.Fullname);

        this.us.setUser();

        this.presentToast("Login success");

        window.localStorage.setItem("Fullname", this.login.payload.Fullname);
        window.localStorage.setItem("Driver_email", this.login.payload.driver_email);
        window.localStorage.setItem("Driver_id",this.login.payload.driver_id);
        window.localStorage.setItem("is_logged_in", '1');
  

        this.router.navigate(["/home"]);

      }
      else
      {
        this.presentToast("Wrong Email or Password");
      }

    })
  }

  

}
