// app.component.ts
import { multi } from './data';
import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  multi: any[];
  view: any[] = [500, 300];

  // Other chart options...
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: [],
  };

  customColors: any;

  constructor() {
    this.multi = multi.map((item) => {
      if (item.value > 0) {
        this.colorScheme.domain.push('blue');
      } else {
        this.colorScheme.domain.push('red');
      }
      return {
        name: item.name,
        value: item.value,
        series: [{ name: 'Value', value: item.value }],
      };
    });

    // Remove the color property from the data
  }
}
