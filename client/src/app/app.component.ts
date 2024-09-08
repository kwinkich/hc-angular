import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  public isShowH: boolean = false;
  public diffTime: number = 0;

  ngOnInit(): void {
    if (!localStorage.getItem('isShowH')) {
      localStorage.setItem('isShowH', 'false');
    } else {
      this.isShowH = JSON.parse(localStorage.getItem('isShowH')!);
    }
  }

  public onIsShowHChange(isShowH: boolean) {
    this.isShowH = isShowH;
  }

  public onCahangeDiffTime(diffTime: number) {
    this.diffTime = diffTime;
  }
}
