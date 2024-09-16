import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs'; // Импортируем Observable и of
import { filter, map } from 'rxjs/operators';
import { CreateHComponent } from './components/create-h/create-h.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowHComponent } from './components/show-h/show-h.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreateHComponent,
    ShowHComponent,
    NgIf,
    AsyncPipe,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hideSidebar$: Observable<boolean> = of(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.hideSidebar$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.url.includes('holiday'))
    );
  }
}
