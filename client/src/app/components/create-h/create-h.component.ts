import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-h',
  standalone: true,
  imports: [],
  templateUrl: './create-h.component.html',
  styleUrl: './create-h.component.scss',
})
export class CreateHComponent {
  @Input() isShowH: boolean = false;
  @Output() isShowHChange = new EventEmitter<boolean>();
  @Output() diffTimeChange = new EventEmitter<number>();

  public bgColor: string = '#000000';
  public textColor: string = '#000000';
  public hName: string = 'Name';
  public hDate: string = 'Date';
  public hTime: string = 'Time';
  public fTotalTime: any;

  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  public getValue(event: Event): string {
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

  public formateTotalTime() {
    let now = new Date().getTime();
    this.fTotalTime = new Date(`${this.hDate} ${this.hTime}`).getTime();
    return this.diffTimeChange.emit(this.fTotalTime - now);
  }

  public navShowH() {
    this.formateTotalTime();
    this.isShowH = true;
    localStorage.setItem('isShowH', 'true');
    this.isShowHChange.emit(this.isShowH);
  }
}
