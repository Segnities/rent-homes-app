import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { HousingService } from '../housing.service';
import type { Housinglocation } from '../types/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filtredLocationList: Housinglocation[] = [];

  filterBy: 'city' | 'state' | 'name' = 'city';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filtredLocationList = housingLocationList;
    });
  }
  changeFilterBy(value: string) {
    if (
      value === 'city' ||
      value === 'state' ||
      value === 'name'
    ) {
      this.filterBy = value;

    }
  }

  filteredResults(text: string) {
    if (!text) {
      this.filtredLocationList = this.housingLocationList;
    }


    this.filtredLocationList = this.housingLocationList.filter(location => location?.[this.filterBy].toLowerCase().includes(text.toLowerCase()));
  }
} 
