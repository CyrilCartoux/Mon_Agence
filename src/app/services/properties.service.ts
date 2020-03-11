import { Property } from './../models/Property.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties: Property[] = [];

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  getProperties() {
    firebase.database().ref('/properties').on('value', (data) => {
      this.properties = data.val() ? data.val() : [];
      this.emitProperties();
    });
   }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  saveProperties() {
    firebase.database().ref('/properties').set(this.properties);
  }

  createProperty(property: Property) {
    this.properties.push(property);
    this.saveProperties();
    this.emitProperties();
  }

  onDeleteProperty(index: number) {
    this.properties.splice(index, 1);
    this.saveProperties();
    this.emitProperties();
  }

  updateProperty(property: Property, index: number) {
    firebase.database().ref('/properties/' + index).update(property).catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
