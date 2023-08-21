import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss']
})

export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: Housinglocation;

  ngOnInit(): void {
    console.log(this.housingLocation);
  }

}
