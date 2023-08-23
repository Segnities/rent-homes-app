import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    housingLocationList:Housinglocation[] = [];
    housingService:HousingService = inject(HousingService); 

    constructor() {
      this.housingLocationList = this.housingService.getAllHousingLocations();
    }
} 
