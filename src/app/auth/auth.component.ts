import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../mon-premier/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  AuthStatus: boolean | undefined;

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.AuthStatus = this.authService.isAuth;
  }
  OnSignIn(){
    this.authService.SignIn().then(
      () => {
        this.AuthStatus= this.authService.isAuth;
        this.router.navigate(['appareils']);

      }
    )

  }
  OnSignOut(){
    this.authService.SignOut();
    this.AuthStatus= this.authService.isAuth;

  }



}
