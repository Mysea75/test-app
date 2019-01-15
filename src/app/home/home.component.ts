import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList:any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.userList = this.homeService.getUserList();
    console.log(this.userList);
  }

}
