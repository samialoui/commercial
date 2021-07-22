import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../mon-premier/services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
name : string = 'Appareil';
status : string = 'Statut';
  constructor( private appareilService: AppareilService, private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
   // name = this.appareilService.getAppareilById(+id).name; 
    // status = this.appareilService.getAppareilById(+id).status; 

  }

}
