import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
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
