import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-edit-h',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './edit-h.component.html',
  styleUrl: './edit-h.component.scss',
})
export class EditHComponent implements OnInit {
  constructor(
    private holidaysService: HolidaysStorageService,
    private route: ActivatedRoute
  ) {}

  public holidays: Holiday[] | undefined = undefined;
  public editH: Holiday | undefined = undefined;
  public bgColor: string | undefined = undefined;
  public textColor: string | undefined = undefined;
  public hName: string | undefined = undefined;
  public hDate: string | undefined = undefined;
  public hTime: string | undefined = undefined;

  ngOnInit(): void {
    this.holidays = this.holidaysService.holidays;
    this.editH = this.holidays.find(
      (h) => h.id === this.route.snapshot.paramMap.get('id')
    );
    document.body.style.backgroundColor = this.editH?.bgColor || '#FFFFFF';
    document.body.style.color = this.editH?.textColor || '#000000';

    this.bgColor = this.editH?.bgColor;
    this.textColor = this.editH?.textColor;
    this.hName = this.editH?.name;
    this.hDate = this.editH?.date;
    this.hTime = this.editH?.time;

    console.log(this.editH);
  }

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

  public updateHoliday() {
    const uHoliday: Holiday = {
      id: this.editH?.id || '',
      name: this.hName || '',
      date: this.hDate || '',
      time: this.hTime || '',
      bgColor: this.bgColor || '',
      textColor: this.textColor || '',
    };
    this.holidaysService.updateH(this.editH?.id || '', uHoliday);

    return alert('Update was successful');
  }
}
