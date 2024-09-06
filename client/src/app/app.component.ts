import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateHComponent } from './components/create-h/create-h.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateHComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
