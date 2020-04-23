import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class GameDataService {
  gameData = {
    resources: {
      food: {
        quantity: 5,
        url:
          "https://raw.githubusercontent.com/dabean-games/town/master/src/assets/images/icons/resources/food.png",
          alt: "Food",
          title: "Food"
      },
      wood: {
        quantity: 10,
        url:
          "https://raw.githubusercontent.com/dabean-games/town/master/src/assets/images/icons/resources/wood.png",
          alt: "Wood",
          title: "Wood"
      },
      stone: {
        quantity: 15,
        url:
          "https://raw.githubusercontent.com/dabean-games/town/master/src/assets/images/icons/resources/stone.png",
          alt: "Stone",
          title: "Stone"
      },
      gold: {
        quantity: 1000,
        url:
          "https://raw.githubusercontent.com/dabean-games/town/master/src/assets/images/icons/resources/gold_coins.png",
          alt: "Gold",
          title: "Gold"
      }
    },
    language: "en"
  };
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang("en");
  }

  /* Data */
  getData() {
    return this.gameData;
  }
  setData(data) {
    this.gameData = data;
  }
  /* Resources */
  getResource(resource: string) {
    return this.gameData.resources[resource];
  }
  setResource(resource: string, quantity: number) {
    this.gameData.resources[resource] = quantity;
  }
  getResourceQuantity(resource: string) {
    return this.gameData.resources[resource].quantity;
  }
  setResourceQuantity(resource: string, quantity: number) {
    this.gameData.resources[resource].quantity = quantity;
  }

  /* Language */
  getLanguages() {
    return this.translate.getLangs;
  }

  getLanguage() {
    this.translate.use(this.gameData.language);
    return this.gameData.language;
  }
  setLanguage(language: string) {
    this.gameData.language = language;
    this.translate.use(language);
  }
}
