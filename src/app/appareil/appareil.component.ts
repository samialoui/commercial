import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../mon-premier/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string | undefined ;
  @Input() appareilStatus : string | undefined;
  @Input()
  appareilIndexOf!: number;
  @Input() id : number | undefined;
  
 
  constructor(private appareilService: AppareilService) { }
  
  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus;
  }
  OnAllumeOne(){
    this.appareilService.AllumeOne(this.appareilIndexOf);
  }

  OnEteindreOne(){
    this.appareilService.EteindreOne(this.appareilIndexOf);
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
     
    }else  {
      return 'red';
    }
  }
}
