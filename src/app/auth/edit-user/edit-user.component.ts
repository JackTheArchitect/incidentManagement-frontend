import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditComponent implements OnInit {
    
    public user: User = new User();
    public message: string | undefined;
    id: string = "";
    
    constructor(private router: Router, private authService: AuthServiceService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.authService.update(this.user).subscribe((response: { success: any; message: string; }) => {
                console.log(response);
                    // Success mensage, redirect user to signin
                    alert("Successfully updated!");
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
        }
    }

ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id') || ""
    this.authService.getUserData()
      .subscribe(data => this.user = data)
  }

}