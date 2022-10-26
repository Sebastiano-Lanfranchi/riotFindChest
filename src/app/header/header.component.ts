import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  regionList = ['BR1', 'EUN1', 'EUW1', 'JP1', 'KR', 'LA1', 'LA2', 'NA1', 'OC1', 'RU', 'TR1']
  summonerName = 'My nickname';
  regionSelected = '';

  constructor() { }

  ngOnInit(): void {
  }

  GetUserInfo(){
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET, PUT, DELETE, POST, OPTIONS",
        "Access-Control-Allow-Headers": "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range",
        "Access-Control-Expose-Headers": "Content-Length,Content-Range",
        "Content-Type": "application/json;charset=utf-8",
      },
      params: {
        summonerName: this.summonerName,
        execute_against: this.regionSelected,
        api_key: 'RGAPI-ddfed81a-16a4-4890-9f71-dc6577d6614c',
      }
    }
    let url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
    axios.get(url, config)
  }



}
