import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _cardUrl = '/assets/data/cardsdata.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Card[]>{
    return this.http.get<Card[]>(this._cardUrl);
  }
}
