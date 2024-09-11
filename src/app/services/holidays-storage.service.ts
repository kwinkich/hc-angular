import { Injectable } from '@angular/core';
import { Holiday } from '../interfaces/holiday';

@Injectable({
  providedIn: 'root',
})
export class HolidaysStorageService {
  public holidays: Holiday[] = [];

  constructor() {
    this.loadHolidays();
  }

  private loadHolidays() {
    let items = localStorage.getItem('holidays');
    if (!items) {
      localStorage.setItem('holidays', '[]');
    } else {
      this.holidays = JSON.parse(items);
    }
  }

  public deleteH(id: string) {
    let delH = this.holidays.findIndex((h) => h.id === id);
    this.holidays.splice(delH, 1);
    localStorage.setItem('holidays', JSON.stringify(this.holidays));
    return delH;
  }

  public addH(holiday: Holiday) {
    this.holidays.push(holiday);
    localStorage.setItem('holidays', JSON.stringify(this.holidays));
    return holiday;
  }
}
