import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  shintoCoin: number;
  balance: number;
  sellCoin: number;

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getValues()
    this.sellCoin = 0;
  }
  getValues(){
    this.shintoCoin = this._http.shareCoin();
    this.balance = this._http.shareBalance();
    console.log("Got updated shintoCoin and balance from service", this.shintoCoin, this.balance)
  }
  sellCoinPost(){
    this.balance = this._http.sellCoin(this.sellCoin);
    this.sellCoin =0 ; //Reset from obj 
    this.getValues()
  }

}
