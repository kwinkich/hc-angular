import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-show-h',
  standalone: true,
  imports: [],
  templateUrl: './show-h.component.html',
  styleUrl: './show-h.component.scss',
})
export class ShowHComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private holidaysService: HolidaysStorageService
  ) {}

  public id: string | null = null;
  public fTotalTime: any;
  public diffTime!: number;

  public findHoliday: Holiday | undefined = undefined;

  public intervaLId!: ReturnType<typeof setInterval>;
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.findHoliday = this.holidaysService.holidays.find((item: any) => {
      return item.id === this.id;
    });

    this.formateTotalTime();
    this.getLeftTime(this.diffTime);

    this.intervaLId = setInterval(() => {
      if (this.diffTime > 900) {
        this.diffTime -= 1000;
        this.getLeftTime(this.diffTime);
      } else {
        this.diffTime = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        clearInterval(this.intervaLId);
      }
    }, 1000);
  }

  ngAfterViewInit(): void {
    document.body.style.backgroundColor =
      this.findHoliday?.bgColor || '#000000';
    document.body.style.color = this.findHoliday?.textColor || '#FFFFFF';
  }

  ngOnDestroy(): void {
    clearInterval(this.intervaLId);
  }

  public formateTotalTime() {
    let now = new Date().getTime();
    this.fTotalTime = new Date(
      `${this.findHoliday?.date} ${this.findHoliday?.time}`
    ).getTime();
    this.diffTime = this.fTotalTime - now;
    return this.diffTime;
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
