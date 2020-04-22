import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameData={
    resources:{
      food:0,
      wood:0,
      stone:0,
      gold:0
    },
    language:'en'
  }
  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    }

  /* Data */
  getData(){
    return this.gameData;
  }
  setData(data){
    this.gameData=data;
  }
  /* Resources */
  getResource(resource:string){
    return this.gameData.resources[resource];
  }
  setResource(resource:string,quantity:number){
    this.gameData.resources[resource]=quantity;
  }

  /* Language */
  getLanguages(){
    return this.translate.getLangs;
  }

  getLanguage(){
    this.translate.use(this.gameData.language);
    return this.gameData.language;
  }
  setLanguage(language:string){
    this.gameData.language=language;
    this.translate.use(language);
  }
}