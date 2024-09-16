import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, AfterViewInit {
  public hLenght = 0;
  constructor(private holidaysService: HolidaysStorageService) {}

  ngOnInit(): void {
    this.hLenght = this.holidaysService.holidays.length;
  }

  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#18181b';
    document.body.style.color = '#befbff';
    document.body.style.setProperty('--bg-change-color', '#18181b');
    document.body.style.setProperty('--main-change-color', '#befbff');
  }
}
