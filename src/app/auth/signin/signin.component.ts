import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', '../register/register.component.css']
})
export class SigninComponent implements OnInit {

  public username: string | undefined;
  public password: string | undefined;
  public message: string | undefined;


  constructor(private router: Router, private authService: AuthServiceService) {
  }

  // tslint:disable-next-line:typedef
  authenticate(form: NgForm) {
    if (form.valid) {

      const val = form.value;
      this.authService.login(val.username, val.password).subscribe(() => {

        let redirectUrl = this.authService.getRedirectUrl;
        if (redirectUrl != null && redirectUrl != "") {
          this.router.navigateByUrl(redirectUrl);
        }
        else
          this.router.navigateByUrl('/incidents');
      },
      (error) => {
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
      }

      );
    } else {
      this.message = 'Form Data Invalid';
    }
  }

  ngOnInit(): void {
  }

}
