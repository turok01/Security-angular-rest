import {Component, Injectable, OnInit} from '@angular/core';
import {Subst} from "../subst-list/subst";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpService} from "../service/http.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

@Injectable()
export class AddComponent implements OnInit {

  subst : Subst;
  myForm : FormGroup;

  constructor(private httpClient:HttpClient, private httpService:HttpService,  private activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
        "nameSubst": new FormControl("ТП-", Validators.required),
        "ip": new FormControl("192.168.1.1", [Validators.required//,
          //                                          Validators.pattern("{0-255}")
          ]),
        "zone" : new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
    this.subst = new Subst();
    //this.subst.nameSubst='NG';
    //this.httpService.getbyId(1).subscribe(
    //  data=>this.subst = data);
    console.log("add component log")
  }

  //onSubmit():void{
  //}

  onSubmit(): void{
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    //const body1 = { nameSubst: this.myForm.get('nameSubst')};
    //const body = {nameSubst: this.subst.nameSubst, zone: this.subst.zone};
    this.subst = this.myForm.value as Subst;
    this.subst.user=null;
    this.httpClient.post(
      'https://localhost:8443/rest/add', this.subst ,{headers: myHeaders}).subscribe(res => {
        console.log('received ok response from post request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      }
    );
  }

}
