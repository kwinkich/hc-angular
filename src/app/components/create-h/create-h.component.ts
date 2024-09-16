import { NgIf } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
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
export class CreateHComponent implements AfterViewInit {
  constructor(private holidaysService: HolidaysStorageService) {}

  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#18181b';
    document.body.style.color = '#befbff';
    document.body.style.setProperty('--bg-change-color', '#18181b');
    document.body.style.setProperty('--main-change-color', '#befbff');
  }

  public bgColor: string = '#18181B';
  public textColor: string = '#befbff';
  public hName: string = '';
  public hDate: string = '';
  public hTime: string = '';

  public vaildHName: boolean = false;
  public vaildHDate: boolean = false;
  public vaildHTime: boolean = false;

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
    document.body.style.setProperty('--bg-change-color', this.bgColor);
  }

  public changeTextColor(event: Event) {
    this.textColor = (event.target as HTMLInputElement).value;
    document.body.style.color = this.textColor;
    document.body.style.setProperty('--main-change-color', this.textColor);
  }

  public createNewHoliday() {
    if (this.hName === '' || this.hDate === '' || this.hTime === '') {
      alert('Please fill in all fields');
      return;
    } else {
      const holiday: Holiday = {
        id: uuidv4(),
        name: this.hName,
        date: this.hDate,
        time: this.hTime,
        bgColor: this.bgColor,
        textColor: this.textColor,
      };

      document.body.style.setProperty('--main-change-color', '#befbff');
      document.body.style.setProperty('--bg-change-color', '#18181b');

      document.body.style.backgroundColor = '#18181b';
      document.body.style.color = '#befbff';
      this.bgColor = '#18181B';
      this.textColor = '#befbff';
      this.hName = '';
      this.hDate = '';
      this.hTime = '';

      return this.holidaysService.addH(holiday);
    }
  }
}
