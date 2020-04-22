import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }
  mas(){
    console.log("Hola");
    this.gameService.setResourceQuantity("wood",this.gameService.getResourceQuantity("wood")+1);
    console.log(this.gameService.getResource("wood"));
  }
}