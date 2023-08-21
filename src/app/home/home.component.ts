import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly photoUrl = "https://angular.io/assets/images/tutorials/faa";

  housingLocations: Housinglocation = {
    id:9999,
    name: "Test home",
    city: "Test City",
    state: "Test State",
    photo: `${this.photoUrl}/example-house.jpg`,
    availableUnints: 99,
    wifi: true,
    laundry: true,
  }
}
