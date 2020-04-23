import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public gameDataService: GameDataService) { }

  ngOnInit() {
  }
  mas(){
    console.log("Hola");
    this.gameDataService.setResourceQuantity("wood",this.gameDataService.getResourceQuantity("wood")+1);
    console.log(this.gameDataService.getResource("wood"));
  }
}