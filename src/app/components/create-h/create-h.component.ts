import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-create-h',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './create-h.component.html',
  styleUrl: './create-h.component.scss',
})
export class CreateHComponent {
  constructor(private holidaysService: HolidaysStorageService) {}

  public bgColor: string = '#FFFFFF';
  public textColor: string = '#000000';
  public hName: string = 'Name';
  public hDate: string = '2025-01-01';
  public hTime: string = '23:00';

  public vaildHName: boolean = true;
  public vaildHDate: boolean = true;
  public vaildHTime: boolean = true;

  public getValue(event: Event, name: string): string {
    switch (name) {
      case 'name': {
        this.vaildHName =
          (event.target as HTMLInputElement).value.trim() !== '' ? true : false;
        break;
      }
      case 'date': {
        this.vaildHDate =
          (event.target as HTMLInputElement).value.trim() !== '' ? true : false;
        break;
      }
      case 'time': {
        this.vaildHTime =
          (event.target as HTMLInputElement).value.trim() !== '' ? true : false;
        break;
      }
    }

    return (event.target as HTMLInputElement).value;
  }

  public changeBgColor(event: Event) {
    this.bgColor = (event.target as HTMLInputElement).value;
    document.body.style.backgroundColor = this.bgColor;
  }

  public changeTextColor(event: Event) {
    this.textColor = (event.target as HTMLInputElement).value;
    document.body.style.color = this.textColor;
  }

  public createNewHoliday() {
    const holiday: Holiday = {
      id: uuidv4(),
      name: this.hName,
      date: this.hDate,
      time: this.hTime,
      bgColor: this.bgColor,
      textColor: this.textColor,
    };

    this.bgColor = '#FFFFFF';
    this.textColor = '#000000';
    this.hName = 'Name';
    this.hDate = '';
    this.hTime = '23:00';

    return this.holidaysService.addH(holiday);
  }
}
