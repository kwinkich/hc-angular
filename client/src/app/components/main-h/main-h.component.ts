import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-h',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-h.component.html',
  styleUrl: './main-h.component.scss',
})
export class MainHComponent {
  public storageHolidays = localStorage.getItem('holidays');
  public parseHolidays =
    this.storageHolidays !== null ? JSON.parse(this.storageHolidays) : null;
}
