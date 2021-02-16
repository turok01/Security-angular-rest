import { Component, OnInit } from '@angular/core';
import {Subst} from "../subst-list/subst";
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  substs:Subst[];

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getRecent().subscribe(
      data=>this.substs = data)
  }

}
