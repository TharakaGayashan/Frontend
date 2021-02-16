import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total AMC', cols: 1, rows: 1 },
          { title: 'Active AMC', cols: 1, rows: 1 },
          { title: 'AMC Reminders', cols: 1, rows: 1 },
          { title: 'Total Users', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 },
          { title: 'Card 6', cols: 1, rows: 1 },
          { title: 'Card 7', cols: 4, rows: 3 }
        ];
      }

      return [
        { title: 'Total AMC', cols: 1, rows: 1 },
        { title: 'Active AMC', cols: 1, rows: 1 },
        { title: 'AMC Reminders', cols: 1, rows: 1 },
        { title: 'Total Users', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 2, rows: 2 },
        { title: 'Card 6', cols: 2, rows: 2 },
        { title: 'Card 7', cols: 4, rows: 3 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
