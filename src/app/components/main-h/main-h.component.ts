import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-main-h',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-h.component.html',
  styleUrl: './main-h.component.scss',
})
export class MainHComponent implements AfterViewInit {
  public parseHolidays!: Holiday[];

  constructor(private holidaysService: HolidaysStorageService) {}

  ngOnInit(): void {
    this.parseHolidays = this.holidaysService.holidays;
  }
  deleteHoliday(id: string): void {
    this.holidaysService.deleteH(id);
  }
  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
  }
}
