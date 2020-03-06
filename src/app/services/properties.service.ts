import { Property } from './../models/Property.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties: Property[];

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  getProperties() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  createProperty(property: Property) {
    this.properties.push(property);
  }

  onDeleteProperty(index : number) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

  updateProperty(property: Property, index: number) {
    this.properties[index] = property;
    this.emitProperties();
  }

}
