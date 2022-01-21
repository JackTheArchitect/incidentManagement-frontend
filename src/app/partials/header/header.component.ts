import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName: String;

  constructor(private router: Router, public authService: AuthServiceService) {
    this.userName = '';
    authService.onTokenChange = () => this.updateNameUser();
  }

  ngOnInit(): void {
    this.updateNameUser();
  }

  public updateNameUser(): void{
    const token = localStorage.getItem('id_token');
    if (token) // we have token?
    {
      const userDataString = atob(token.split('.')[1]); // get data from token
      const userData = JSON.parse(userDataString); // parse json
      this.userName = userData.username;
    }
  }

  onLogout(){
    this.authService.logout();
  }

}
