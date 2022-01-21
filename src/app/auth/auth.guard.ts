import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { AuthServiceService } from "./auth-service.service";

@Injectable()
export class AuthGuard {

    constructor(private router: Router,
        private auth: AuthServiceService) { }
    
    // Check if the user is authorized
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean 
    {
        if (!this.auth.isLoggedIn()) {
            console.log("Not allowed");
            this.auth.redirectUrl = state.url;
            this.router.navigateByUrl("/user/signin");
            return false;
        }
        return true;
    }
}