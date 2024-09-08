import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-h',
  standalone: true,
  imports: [],
  templateUrl: './show-h.component.html',
  styleUrl: './show-h.component.scss',
})
export class ShowHComponent implements OnInit, OnDestroy {
  @Input() diffTime: number = 0;
  public intervaLId!: ReturnType<typeof setInterval>;
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  ngOnInit(): void {
    this.intervaLId = setInterval(() => {
      console.log(this.diffTime);

      if (this.diffTime > 900) {
        this.diffTime -= 1000;
        this.getLeftTime(this.diffTime);
      } else {
        this.diffTime = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        console.log('ends');
        clearInterval(this.intervaLId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervaLId);
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
