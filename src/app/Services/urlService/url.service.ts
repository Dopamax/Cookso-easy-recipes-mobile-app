import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url_db="../../../assets/json/recipses.json";
  constructor() { }
}
