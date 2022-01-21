import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private urlServer ='https://comp229-group-project.herokuapp.com/users';

  private _redirectUrl: string;
  public onTokenChange: () => void; // callback for the header name

  constructor(private http: HttpClient, private router: Router)  { }

  // Recieve the result of login call including the token
  login(username: string, password: string ): Observable<any> {
    return this.http.post<any>(this.urlServer + '/signin', {username, password})
        .pipe(map(res => {
          // Save token in local storage
          localStorage.setItem('id_token', res.token);
          this.onTokenChange(); //call callback
          return res;
        }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

  // Return if we are logged in
  public isLoggedIn(): boolean {
    return localStorage.getItem('id_token') != null;
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.urlServer + '/signup', user)
  }

  update(user : User){
    return this.http.put<any>(this.urlServer + '/update', user)
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.urlServer + '/profile')
  }

  public get getRedirectUrl(): string{
    let result = this._redirectUrl;
    this._redirectUrl = null;
    return result;
}

  set redirectUrl(url: string){
      this._redirectUrl = url;
  }
}
