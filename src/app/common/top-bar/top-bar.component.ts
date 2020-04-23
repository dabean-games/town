import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../../game-data.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public gameDataService: GameDataService) { }
  food:number;
  wood:number;
  stone:number;
  gold:number;

  ngOnInit() {
   this.food= this.gameDataService.getResource("food");
   this.wood= this.gameDataService.getResource("wood");
   this.stone= this.gameDataService.getResource("stone");
   this.gold= this.gameDataService.getResource("gold");
  }

}