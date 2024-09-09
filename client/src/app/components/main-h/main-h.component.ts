import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-h',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-h.component.html',
  styleUrl: './main-h.component.scss',
})
export class MainHComponent implements AfterViewInit {
  private storageHolidays = localStorage.getItem('holidays');
  public parseHolidays =
    this.storageHolidays !== null ? JSON.parse(this.storageHolidays) : null;

  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
  }
}
