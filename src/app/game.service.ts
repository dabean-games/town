import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class GameService {
  gameData = {
    resources: {
      food: {
        quantity: 5,
        url:
          "https://cdn.jsdelivr.net/gh/dabean-games/town@master/src/assets/images/icons/resources/food.png",
          alt: "Food"
      },
      wood: {
        quantity: 10,
        url:
          "https://cdn.jsdelivr.net/gh/dabean-games/town@master/src/assets/images/icons/resources/wd_t_07.png",
          alt: "Wood"
      },
      stone: {
        quantity: 15,
        url:
          "https://cdn.jsdelivr.net/gh/dabean-games/town@master/src/assets/images/icons/resources/wd_t_07.png",
          alt: "Stone"
      },
      gold: {
        quantity: 1000,
        url:
          "https://cdn.jsdelivr.net/gh/dabean-games/town@master/src/assets/images/icons/resources/wd_t_07.png",
          alt: "Gold"
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
