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
      });
      
      Swal.fire('Register Successfully')
      window.location.reload();
    }
    else
    {
     Swal.fire('Password did not match!')
    }
  }

}
