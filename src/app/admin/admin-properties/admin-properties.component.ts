import { Subscription } from 'rxjs';
import { PropertiesService } from './../../services/properties.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubscription: Subscription;
  properties: any[] = [];

  indexToRemove;

  constructor(
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService,
  ) { }

  ngOnInit(): void {
    this.initPropertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data) => {
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required]
    });
  }

  onSubmitPropertiesForm() {
    const newProperty = this.propertiesForm.value;
    this.propertiesService.createProperty(newProperty);
    $('#propertiesFormModal').modal('hide');
  }

  resetForm() {
    this.propertiesForm.reset();
  }

  onDeleteProperty(index: any) {
    $('#deletePropertyModal').modal('show');
    this.indexToRemove = index;
  }

  onConfirmDeleteProperty() {
    this.propertiesService.onDeleteProperty(this.indexToRemove);
    $('#deletePropertyModal').modal('hide');
  }

}
