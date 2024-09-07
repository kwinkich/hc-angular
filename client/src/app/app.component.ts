import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateHComponent } from './components/create-h/create-h.component';
import { ShowHComponent } from './components/show-h/show-h.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateHComponent, ShowHComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isShowH: boolean = false;

  public onIsShowHChange(isShowH: boolean) {
    this.isShowH = isShowH;
  }
}
