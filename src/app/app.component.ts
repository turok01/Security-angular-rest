import {Component, OnInit} from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import {authConfig} from "./auth.config";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  //title = 'MPS-ui';
  public isLoggedIn = false;
  baseUrl = environment.baseUrl;

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();

  }

}
export function getParamsObjectFromHash() {
  const hash = window.location.hash ? window.location.hash.split('#') : [];
  let toBeReturned = {};
  if (hash.length && hash[1].split('&').length) {
    toBeReturned = hash[1].split('&').reduce((acc, x) => {
      const hello = x.split('=');
      if (hello.length === 2) acc[hello[0]] = hello[1];
      return acc;
    }, {});
  }
  return Object.keys(toBeReturned).length ? toBeReturned : null;
}
