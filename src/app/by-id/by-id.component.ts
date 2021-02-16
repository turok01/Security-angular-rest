import { Component, OnInit } from '@angular/core';
import {Subst} from "../subst-list/subst";
import {HttpService} from "../service/http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {

  subst : Subst;
  id : number;

  constructor(private httpService:HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.httpService.getbyId(this.id).subscribe(
      data=>this.subst = data)
    console.log("ngOnInit ByIdComponent output in console")
  }

}
