import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient){ }

  getPosts()
  {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
