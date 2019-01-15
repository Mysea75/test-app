import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getUserList(){
    return [
      {id:1, name:"AAA"},
      {id:2, name:"BBB"},
      {id:3, name:"CCC"},
      {id:4, name:"DDD"},
      {id:5, name:"EEE"}
    ]
  }
}
