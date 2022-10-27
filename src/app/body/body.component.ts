import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export interface Champion {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  championName: string | undefined;
  chestGranted: boolean;
  lastPlayTime: EpochTimeStamp;
  summonerId: string;
  tokensEarned: number;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  refresh: boolean = true;
  jsonKey: any;
  constructor(public apiService: ApiService) {
    this.jsonKey = require("../../assets/json/champion.json");
    console.log(this.jsonKey)
  }
  renderlist: Array<Champion> = [];

  ngOnInit(): void {
    this.refresh = false;
    let iterableList: any = Object.values(this.jsonKey.data);
    this.renderlist = this.apiService.listChampion.filter((champ: Champion) => champ.chestGranted === false);
    console.log(this.renderlist);
    this.renderlist.forEach((champ: Champion) => {
      champ.championName = iterableList.find((x: any) => x.key == champ.championId).id;
    });
    this.refresh = true;
  }



}
