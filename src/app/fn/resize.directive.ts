import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  standalone: true,
})
export class ResizableDirective {
  private startX: number = 0;
  private startWidth: number = 0;
  private minWidth = 250;
  private maxWidth = 450;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isInResizeZone(event)) {
      this.startX = event.clientX;
      this.startWidth = this.el.nativeElement.offsetWidth;

      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }

  private onMouseMove = (event: MouseEvent) => {
    const dx = event.clientX - this.startX;
    let newWidth = this.startWidth + dx;

    // Проверяем минимальную и максимальную ширину
    if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
    }
  };

  private onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  private isInResizeZone(event: MouseEvent): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return event.clientX >= rect.right - 10 && event.clientX <= rect.right;
  }
}
