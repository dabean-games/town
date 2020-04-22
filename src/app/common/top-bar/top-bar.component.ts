import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public gameService: GameService) { }
  food:number;
  wood:number;
  stone:number;
  gold:number;

  ngOnInit() {
   this.food= this.gameService.getResource("food");
   this.wood= this.gameService.getResource("wood");
   this.stone= this.gameService.getResource("stone");
   this.gold= this.gameService.getResource("gold");
  }

}