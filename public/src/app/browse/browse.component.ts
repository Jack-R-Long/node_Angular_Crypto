import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service' ;  //import access service 


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  transactions: any;


  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.transactions = []
    this.getTrans()
  }
  getTrans(){
    this.transactions = this._http.shareTransactions()
    console.log("Got transactions", this.transactions)
  }

}
