// custom-bar.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-bar',
  template: `
    <svg:g *ngFor="let bar of bars" class="bar" [attr.transform]="bar.transform">
      <svg:rect
        [attr.fill]="bar.data.color"
        [attr.height]="bar.height"
        [attr.width]="bar.width"
        [attr.x]="bar.x"
        [attr.y]="bar.y"
        style="cursor: pointer;"
      />
    </svg:g>
  `,
  styleUrls: ['./custom-bar.component.css'],
})
export class CustomBarComponent {
  @Input() bars: any;
}
