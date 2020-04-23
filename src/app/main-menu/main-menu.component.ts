import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Output() optionSelected= new EventEmitter<string>();
  constructor(
    public translate: TranslateService,
    public gameDataService: GameDataService) { }

  ngOnInit() {
  }

  switchLang(lang: string) {
    this.gameDataService.setLanguage(lang);
  }

  selectOption(optionSelected){
   this.optionSelected.emit(optionSelected);
  }

}