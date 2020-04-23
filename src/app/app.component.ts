import { Component, OnInit } from "@angular/core";
import { GameDataService } from './game-data.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  mainMenu = true;
  game = false;

  constructor(public gameDataService: GameDataService) {}

  ngOnInit() {}

  selectOption(optionSelected: string) {
    this.disableOptions();
    console.log(optionSelected);
    switch (optionSelected) {
      case 'newGame':
        console.log("pong");
        this.newGame();
        break;
      default:
        this.mainMenu = true;
    }
  }

  disableOptions() {
    this.mainMenu = false;
    this.game = false;
  }

  newGame() {
    this.game = true;
  }
}
