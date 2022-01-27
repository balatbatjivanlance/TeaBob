import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(event:any)
  {
    
     let driver_fname = event.target[0].value;
     let driver_lname = event.target[1].value;
     let driver_email = event.target[2].value;
     let driver_password = event.target[3].value;
     let driver_confirmpassword = event.target[4].value;

    if (driver_password == driver_confirmpassword) 
    {
      this.ds.sendApiRequest("registerDriver", {
        driver_fname,
        driver_lname,
        driver_email,
        driver_password
      }).subscribe((data: any) => {
        console.log(data);
      });
      
      Swal.fire('Register Successfully')
    }
    else
    {
     Swal.fire('Password did not match!')
    }
  }

  // registerDriver(){
  //   if (driver_password == driver_confirmpassword) {
  //     this.userInfo.user_name = this.user_name;
  //   this.userInfo.user_lname = this.user_lname;
  //   this.userInfo.user_uname = this.user_uname;
  //   this.userInfo.user_contact = this.user_contact;
  //   this.userInfo.user_address = this.user_address;
  //   this.userInfo.user_pword = this.user_pword;
  //   this.userInfo.user_Confpword = this.user_Confpword;
  //   this.userInfo.user_role = this.user_role;


  //   this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe((data: any) => {
  //   });

  //   Swal.fire('Register Successfully')
  //   this.router.navigate(['/login']);
  //   }
    
  //   else
  //   Swal.fire('Password did not match!')

  // }

}
