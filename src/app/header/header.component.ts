import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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
        'X-Riot-Token': environment['X-Riot-Token'],
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET, PUT, DELETE, POST, OPTIONS",
        "Access-Control-Allow-Headers": "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range",
        "Access-Control-Expose-Headers": "Content-Length,Content-Range",
        "Content-Type": "application/json;charset=utf-8",
      },
    }
    let url = "https://cors-anywhere.herokuapp.com/https://"+this.regionSelected.toLowerCase()+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+this.summonerName;
    axios.get(url, config)
  }



}
