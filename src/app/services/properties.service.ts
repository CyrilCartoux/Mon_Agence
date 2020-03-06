import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties = [
    {
      title: 'Ma maison',
      category: 'Maison',
      sold: true,
      surface: 140
    },
    {
      title: 'Petit appartement',
      category: 'Appartement',
      sold: false
    },
    {
      title: 'Belle villa',
      category: 'Maison',
      sold: true
    }
  ];

  constructor() { }

  propertiesSubject = new Subject<any[]>();

  getProperties() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  createProperty(property) {
    this.properties.push(property);
  }

  onDeleteProperty(index) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

  updateProperty(property, index) {
    this.properties[index] = property;
    this.emitProperties();
  }

}
