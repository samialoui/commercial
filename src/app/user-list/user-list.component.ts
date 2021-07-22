import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../mon-premier/services/user.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] | undefined;
  userSubscription!: Subscription;

  constructor( private userService: UserService,
               private router: Router,
               ) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
      this.users= users;
      }
    );
    this.userService.emitUsers();
  }

}
