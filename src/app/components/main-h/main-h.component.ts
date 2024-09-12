import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Holiday } from '../../interfaces/holiday';
import { HolidaysStorageService } from '../../services/holidays-storage.service';

@Component({
  selector: 'app-main-h',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-h.component.html',
  styleUrl: './main-h.component.scss',
})
export class MainHComponent implements AfterViewInit {
  public parseHolidays!: Holiday[];
  public selectedFile: any;
  public jsonObj: any | null = null;

  constructor(private holidaysService: HolidaysStorageService) {}

  ngOnInit(): void {
    this.parseHolidays = this.holidaysService.holidays;
    console.log(this.parseHolidays);
  }
  deleteHoliday(id: string): void {
    this.holidaysService.deleteH(id);
  }
  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#001b15';
    document.body.style.color = '#befbff';
  }

  public uploadFile(event: any) {
    let pJson;
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      console.log(fileReader.result?.toString());
      if (fileReader.result !== null) {
        pJson = JSON.parse(fileReader.result.toString());
        this.parseHolidays = pJson;
        this.holidaysService.addHs(this.parseHolidays);
        console.log(this.jsonObj);
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  public convertToJsonFile() {
    const jsonString = JSON.stringify(this.parseHolidays);
    const blob = new Blob([jsonString], { type: 'application/json' });
    return blob;
  }

  public downloadRequestObject() {
    const blob = this.convertToJsonFile();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'holidays.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
