import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ViewAppareilComponent } from './view-appareil/view-appareil.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './mon-premier/services/auth.service';
import { AuthGuard } from './mon-premier/services/auth-guard.service';
import { AppareilService } from './mon-premier/services/appareil.service';
import { RouterModule, Routes } from '@angular/router';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './mon-premier/services/user.service';
const appRoutes: Routes =[
  {path: 'appareils', canActivate:[AuthGuard], component: ViewAppareilComponent },
  {path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'edit', canActivate:[AuthGuard],  component: EditAppareilComponent},
  {path: 'users', canActivate:[AuthGuard], component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: '', component: ViewAppareilComponent},
  { path:'not-found', component: Erreur404Component},
  { path: '**', redirectTo:'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ViewAppareilComponent,
    MonPremierComponent,
    SingleAppareilComponent,
    AuthComponent,
    Erreur404Component,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AppareilService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
