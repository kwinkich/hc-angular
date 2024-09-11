import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-create-h',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create-h.component.html',
  styleUrl: './create-h.component.scss',
})
export class CreateHComponent {
  constructor(private holidaysService: HolidaysStorageService) {}

  private storageItems = localStorage.getItem('holidays');
  private itemsArr: Holiday[] = [];
  public bgColor: string = '#000000';
  public textColor: string = '#FFFFFF';
  public hName: string = 'Name';
  public hDate: string = new Date().toString();
  public hTime: string = '23:00';

  public getValue(event: Event): string {
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

    this.bgColor = '#000000';
    this.textColor = '#FFFFFF';
    this.hName = 'Name';
    this.hDate = new Date().toString();
    this.hTime = '23:00';

    return this.holidaysService.addH(holiday);
  }
}
