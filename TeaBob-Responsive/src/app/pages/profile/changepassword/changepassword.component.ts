import { Component, OnInit, Inject  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  passwordUpdate = false;
  wrongOldPassword = false;
  minCharacters = false;
  userInfo: any = {};

  user_id = localStorage.getItem("id");

  old_password: any
  user_pword: any;

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullUsers();
  }


  user_name: any;
  user_lname: any;
  user_uname: any;
  user_contact: any;
  user_address: any;


  pullUsers() {
    this.ds.sendApiRequest("users/", localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.userInfo = data.payload;
    
    this.user_name = this.userInfo[0].user_name;
    this.user_lname = this.userInfo[0].user_lname;
    this.user_uname = this.userInfo[0].user_uname;
    this.user_contact = this.userInfo[0].user_contact;
    this.user_address = this.userInfo[0].user_address;
    
    }
    )
  }


  ChangePassword(){
    if(this.old_password != null){
      this.passwordUpdate = true;
      if(this.user_pword != null && this.user_pword.length < 8 && this.passwordUpdate == true){
        this.minCharacters = true;
      }
      else if(this.user_pword != null && this.passwordUpdate == true){
        this.userInfo.old_password = this.old_password;
        this.userInfo.user_pword = this.user_pword;
        this.userInfo.user_id = this.user_id;
      
        this.ds.sendApiRequest("ChangePassword" + this.user_id, this.userInfo).subscribe((data:any) =>{
          if(data.payload == null){
              this.wrongOldPassword = true;
              // alert('Wrong Old Password');
              Swal.fire(
                'Wrong Old Password',
                'The Old Password is Wrong!',
                'error'
              )
          }
          else{
            this.wrongOldPassword = false;
            // alert('Password Changed');
            Swal.fire(
              'Password Changed!',
              'You clicked here to continue!',
              'success'
            )
          }

        });
        this.sendMessage();
      }
    }
    else{
      Swal.fire(
        'Password Not Changed!',
        'You clicked here to continue!',
        'info'
      )
    }
    this.dialog.closeAll();
  }



sendMessage(): void {
  this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
}


}


// old_pword: any;
// new_pword: any;
// cnew_pword: any;

// ChangePassword() {

//       Swal.fire({
//         title: 'Do you want to save the changes?',
//         showDenyButton: true,
//         confirmButtonText: 'Save',
//         denyButtonText: `Don't save`,
//       }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//           let id  = localStorage.getItem("id");
    
//      this.userinfo.user_id =  id;
//      this.userinfo.user_pword =  this.cnew_pword
    
//       this.ds.sendApiRequest("ChangePassword/" + id, this.userinfo).subscribe((data: { payload: any; }) => {});
//       this.sendMessage();
//           Swal.fire('Saved!', '', 'success')
//         } else if (result.isDenied) {
//           Swal.fire('Changes are not saved', '', 'info')
//         }
//       })
//       this.dialog.closeAll();
    

// }