import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#18181b';
    document.body.style.color = '#befbff';
    document.body.style.setProperty('--bg-change-color', '#18181b');
    document.body.style.setProperty('--main-change-color', '#befbff');
  }
}
