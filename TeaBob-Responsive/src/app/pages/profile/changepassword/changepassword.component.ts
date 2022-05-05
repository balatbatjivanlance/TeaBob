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


  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


user_pword: any;
new_pword: any;
cnew_pword: any;

changeinfo: any = {};

updateProfile() {
  if(this.new_pword == null){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
 
  else if(this.new_pword == this.cnew_pword){
          Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id = localStorage.getItem("id");
        let id2 = localStorage.getItem("id");

  this.changeinfo.user_id =  id;

  this.changeinfo.user_pword = this.cnew_pword

    this.ds.sendApiRequest("ChangePassword/" + id, this.changeinfo).subscribe((data: { payload: any; }) => {});
    
        Swal.fire('Saved!', '', 'success')
        window.location.reload()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }


}

}
