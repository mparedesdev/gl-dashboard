import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stats-card',
  template: `
    <mat-card [class]="color">
      <mat-card-header>
        <mat-icon mat-card-avatar>{{icon}}</mat-icon>
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <h1>{{value}}</h1>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    h1 {
      margin: 0;
      font-size: 2.5em;
      text-align: center;
    }
  `],
  imports: [MatCardModule]
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() color: string = '';
}