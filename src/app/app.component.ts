import {Component, OnInit} from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import {authConfig} from "./auth.config";
import {environment} from "../environments/environment";
import {TokenStorageService} from "./_services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  //title = 'MPS-ui';
  userName: string = null;
  //public isLoggedIn = false;
  baseUrl = environment.baseUrl;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  /*constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
    oauthService.loadDiscoveryDocumentAndLogin().then(_ => {
      const claims = this.oauthService.getIdentityClaims();
      this.userName = claims['given_name'];
      //this.queryApi();
    });
    }*/
  constructor(private tokenStorageService: TokenStorageService, private oauthService: OAuthService) { }

  ngOnInit(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(_ => {
      const claims = this.oauthService.getIdentityClaims();
      this.userName = claims['given_name'];
      //this.queryApi();
      });

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.displayName;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
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
