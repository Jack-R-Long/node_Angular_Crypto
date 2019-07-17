import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  shintoCoin = 0;
  balance= 0;
  transactions= []; //Trasaction array of objects

  constructor(
    private _http: HttpClient
  ) { }

  
  shareCoin(){
    console.log("SERVICE", this.shintoCoin)
    return (this.shintoCoin)
  }
  shareBalance(){
    return (this.balance)
  }
  shareTransactions(){
    return (this.transactions)
  }
  addCoin(inc){
    this.shintoCoin ++
    this.balance = this.balance + Number(inc)
    this.transactions.push({
      'id' : Math.floor(Math.random()*1000),
      'value' : this.shintoCoin,
      'action' : "BOUGHT "+inc+" ShintoCoins"
    })
    return (this.balance)
  }
  sellCoin(inc){
    if(this.balance - Number(inc) < 0){
      return(this.balance)
    }else {
      this.shintoCoin --
      this.balance = this.balance - Number(inc)
      this.transactions.push({
        'id' : Math.floor(Math.random()*1000),
        'value' : this.shintoCoin,
        'action' : "SOLD "+inc+" ShintoCoins"
      })
      return(this.balance)
    }
  }


}
