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
    console.log("hello");
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
    console.log(this.driver_email,this.driver_password);
    this.ds.sendApiRequest("getDriver", 
    {
      driver_email:this.driver_email, 
      driver_password: this.driver_password
    }
    ).subscribe((data: { payload: any }) => {
      this.login = data;

      // pag may ipapasa ka na data sa api Nnyo ganto syntax pre
      // oo pre
      // kunyare may update ka diba 
      // oo ganyan din pre 
      // basta may ipapasa ka na data kay api ganyan
      // oo pre
      // pwede din pag may condition ka sa get where id=$driver_id kunyare1
      //hThis is a comment

      console.log(this.login);
      if(this.login.status.remarks == "success")
      {
        this.us.saveDriver(this.login.payload.Fullname);

        this.us.setUser();

        this.presentToast("Login success");
        this.router.navigate(["/home"]);

      }
      else
      {
        this.presentToast("Wrong Email or Password");
      }

    })
  }

  

}
