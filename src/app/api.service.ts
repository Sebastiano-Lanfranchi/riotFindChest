import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  regionSelected: any;
  summonerName: string = '';
  idUser: any;
  listChampion: any;
  listReady: boolean = false;

  constructor() { }

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
    axios.get(url, config).then(response=>{
      this.idUser = response.data.id;
      this.listReady = false;
    })
  }

  GetChampionsMastery(){
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
    let url = "https://cors-anywhere.herokuapp.com/https://"+this.regionSelected.toLowerCase()+".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+this.idUser;
    axios.get(url, config).then(response=>{
      this.listChampion = response.data;
      this.listReady = true;
    })
  }

}
