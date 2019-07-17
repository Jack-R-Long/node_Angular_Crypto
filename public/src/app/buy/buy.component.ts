import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  shintoCoin: number;
  balance: number;
  buyCoin: number;

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getValues()
    this.buyCoin = 0;
  }
  getValues(){
    this.shintoCoin = this._http.shareCoin();
    this.balance = this._http.shareBalance();
    console.log("Got updated shintoCoin and balance from service", this.shintoCoin, this.balance)
  }
  buyCoinPost(){
    this.balance = this._http.addCoin(this.buyCoin);
    this.buyCoin = 0; //RESET form value
    this.getValues()
  }

}
