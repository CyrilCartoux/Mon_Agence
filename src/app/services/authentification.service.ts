import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  signUpUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            console.log('connecté');
            resolve();
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}