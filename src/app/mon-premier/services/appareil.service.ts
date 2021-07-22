import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService{
  appareilSubject = new Subject<any[]>();
    private appareils=[
        {
     id: 1,
     name : 'television',
     status :'éteint'
        },
     
        {
     id: 2,
     name : 'telephone',
     status : 'allumé'
        },
     
        {
          id: 3,
          name : 'radio',
          status : 'éteint'
        },
      ];
      constructor(private httpClient: HttpClient){}

      emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
      }
     getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    } 

      AllumeTout(){
          for(let appareil of this.appareils){
appareil.status= 'allumé'
          }
          this.emitAppareilSubject();
      }
      EteindreTout(){
          for(let appareil of this.appareils){
              appareil.status= 'éteint'
          }
          this.emitAppareilSubject(); 
      }
      AllumeOne(index : number){
          this.appareils[index].status='allumé';
          this.emitAppareilSubject();
      }
      EteindreOne(index: number){
          this.appareils[index].status='éteint';
          this.emitAppareilSubject();
      }
      addAppareil( name: string, status: string){
        const appareilObject ={
           id :0,
           name :'',
           status: '',
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length-1)].id+1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
      }
      onAddToServe(){
        this.httpClient.put('https://http-appareil-demo-default-rtdb.firebaseio.com//appareils.json',this.appareils)
        .subscribe(
          () => {
            console.log("Enregistrer terminé");
          },
          (error) => {
           console.log("erreur de sauvgarder!"+ error);
          }
        );
      }
      getFromServe(){
          this.httpClient.get<any[]>('https://http-appareil-demo-default-rtdb.firebaseio.com/appareils.json')
          .subscribe(
              (reponse) => {
                  this.appareils= reponse;
                  this.emitAppareilSubject();
                  console.log("donnée selectionnée avec succée");
              },
              (error)=>{
                  console.log("erreur de selectionnée"+error);

              }
         
          );

      }

}