import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  public confirmpassword: string | undefined;
  public message: string | undefined;

  constructor(private router: Router, private authService: AuthServiceService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
        // Checks if the passwords match.
        if(this.user.password == this.confirmpassword){
            this.authService.register(this.user)
            .subscribe((response: { success: any; message: string; }) => {
                console.log(response);
                // Success mensage, redirect user to signin
                alert(response.message);
                this.router.navigateByUrl("/user/signin");
            }, (error) => {
                console.log(error);
                // We catch any error from server
                if (error.error && error.error.message ) // if we have message from server, display it
                {
                    this.message = error.error.message;
                }
                else
                {
                    this.message = "Error";
                }

            });
        } else {
            this.message = "Passwords do not match";
        }
    } else {
        this.message = "Form Data Invalid";
    }
}


  
  // authenticate(form: NgForm) {
  //   if (form.valid) {

  //     const val = form.value;
  //     this.authService.register(val.firstName, val.lastName, val.email, val.username, val.usertype, val.password, val.confirmpassword).subscribe(() => {
  //       this.router.navigateByUrl('/user/signin');
  //     });
  //   } else {
  //       this.message = 'Form Data Invalid';
  //   }
  // }
  ngOnInit(): void {
  }

}
