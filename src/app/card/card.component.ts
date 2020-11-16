import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cards = [];
  
  constructor(private _dataService: DataService) { }

  

  ngOnInit(): void {
    this._dataService.getData()
    .subscribe(data => this.cards = data)
  }

}
