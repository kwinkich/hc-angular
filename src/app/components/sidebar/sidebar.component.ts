import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResizableDirective } from '../../fn/resize.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ResizableDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
