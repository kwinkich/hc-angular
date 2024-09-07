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
    this.getLeftTime(this.fTotalTime - now);
  }

  private getLeftTime(unixTime: number) {
    if (typeof unixTime === 'number') {
      if (unixTime > 0) {
        this.days = Math.floor(unixTime / (1000 * 3600 * 24));
        this.hours = Math.floor(
          (unixTime % (1000 * 3600 * 24)) / (1000 * 3600)
        );
        this.minutes = Math.floor((unixTime % (1000 * 3600)) / (1000 * 60));
        this.seconds = Math.floor((unixTime % (1000 * 60)) / 1000);

        this.isShowH = true;
        this.isShowHChange.emit(this.isShowH);

        return `${this.days}d ${this.hours % 24}h ${this.minutes % 60}m ${
          this.seconds % 60
        }s`;
      } else {
        throw new Error('Date < 0');
      }
    } else {
      throw new Error('Invalid date');
    }
  }
}
