import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from '../types/housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})

export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: Housinglocation;

  ngOnInit(): void {
    console.log(this.housingLocation);
  }

}
