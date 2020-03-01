import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  properties = [
    {
      title: 'Ma maison',
      category: 'Maison',
      sold: true
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
  ]

  getSoldValue(property: any) {
    if (property.sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnInit(): void {
  }

}
