
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../mon-premier/services/appareil.service';


@Component({
  selector: 'app-view-appareil',
  templateUrl: './view-appareil.component.html',
  styleUrls: ['./view-appareil.component.css']
})
export class ViewAppareilComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Date();

 appareils : any[] | undefined;
 appareilSubscription: Subscription | undefined ;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  OnAllumeTout(){
    this.appareilService.AllumeTout();
  }
  OnEteindreTout(){
    this.appareilService.EteindreTout();
  }
  ngOnInit(){
    this.appareilService.appareilSubject.subscribe(
      (appareils: any[])=>{
        this.appareils=appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  OnSave(){
    this.appareilService.onAddToServe();
  }
  OnFetch(){
    this.appareilService.getFromServe();
  }
}

