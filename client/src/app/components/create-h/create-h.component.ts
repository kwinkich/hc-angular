import { AfterViewInit, Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Holiday } from '../../interfaces/holiday';

@Component({
  selector: 'app-create-h',
  standalone: true,
  imports: [],
  templateUrl: './create-h.component.html',
  styleUrl: './create-h.component.scss',
})
export class CreateHComponent implements AfterViewInit {
  public storageItems = localStorage.getItem('holidays');
  public itemsArr: Holiday[] = [];
  public bgColor: string = '#000000';
  public textColor: string = '#FFFFFF';
  public hName: string = 'Name';
  public hDate: string = new Date().toString();
  public hTime: string = '23:00';
  public fTotalTime: any;

  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  ngAfterViewInit(): void {
    document.body.style.backgroundColor = this.bgColor;
    document.body.style.color = this.textColor;
  }

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

  // public formateTotalTime() {
  //   let now = new Date().getTime();
  //   this.fTotalTime = new Date(`${this.hDate} ${this.hTime}`).getTime();
  //   return this.diffTimeChange.emit(this.fTotalTime - now);
  // }

  public createNewHoliday() {
    const holiday: Holiday = {
      id: uuidv4(),
      name: this.hName,
      date: this.hDate,
      time: this.hTime,
      bgColor: this.bgColor,
      textColor: this.textColor,
    };

    if (!this.storageItems) {
      this.itemsArr.push(holiday);
      let holidayJSON = JSON.stringify(this.itemsArr);
      localStorage.setItem('holidays', holidayJSON);
    } else {
      this.itemsArr = JSON.parse(this.storageItems);
      this.itemsArr.push(holiday);
      let holidayJSON = JSON.stringify(this.itemsArr);
      localStorage.setItem('holidays', holidayJSON);
    }

    this.bgColor = '#000000';
    this.textColor = '#FFFFFF';
    this.hName = 'Name';
    this.hDate = new Date().toString();
    this.hTime = '23:00';

    return holiday;
  }
}
