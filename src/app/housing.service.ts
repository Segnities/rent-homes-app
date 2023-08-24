import { Injectable } from '@angular/core';
import { Housinglocation } from './types/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';

  submitApplicationForm(firstName: string, lastName: string, email: string) {
    console.log('RECIEVED \nFirstname: ' + firstName + '\nLastname: ' + lastName + '\nEmail: ' + email);
  }

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};
  }
}
