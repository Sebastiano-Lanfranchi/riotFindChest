import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  regionList = ['BR1', 'EUN1', 'EUW1', 'JP1', 'KR', 'LA1', 'LA2', 'NA1', 'OC1', 'RU', 'TR1']
  summonerName = 'My nickname';
  regionSelected = '';
  idUser = '';

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

}
