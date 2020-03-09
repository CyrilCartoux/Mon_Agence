import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Mon Agence';
  isLoggedIn = false;

  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    )
  }

  onSignOut() {
    this.authentificationService.signOutUser();
  }

}