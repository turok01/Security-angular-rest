import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})//providedIn will auto-register class when the app bootstraps.
export class HttpService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    //return this.http.get('http://localhost:8080/rest-select');
    //return this.http.get('http://localhost:8443/rest/select');
    return this.http.get(this.baseUrl + '/rest/select');
    //return this.http.get('https://localhost:8443/select');
  }

  getRecent():Observable<any>{
    return  this.http.get(this.baseUrl + '/rest/recent');
    //return  this.http.get('http://localhost:8443/rest/recent');
  }

  getbyId(id:number):Observable<any>{
    return  this.http.get(this.baseUrl + '/rest/' + id);
    //return  this.http.get('http://localhost:8443/rest/' + id);
  }

}
