import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey:string = 'X16KOxW0ol5YRVjtQAkWJ10mGbK8RPAg';
  constructor(private http:HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    this._tagsHistory = this._tagsHistory.filter(tagHistory => tagHistory !== tag);
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);
    if (this._tagsHistory.length === 10) {
      this._tagsHistory.pop();
    }
    this._tagsHistory.unshift(tag);

    // fetch(`https://api.giphy.com/v1/gifs/search?
    // &api_key=${this.apiKey}&q=${tag}&limit=10`)
    // .then(result => result.json())
    // .then(data => console.log(data))

    this.http.get(`https://api.giphy.com/v1/gifs/search?
    // &api_key=${this.apiKey}&q=${tag}&limit=10`)
    .subscribe(resp => {
      console.log(resp);
      
    })

  }
}
