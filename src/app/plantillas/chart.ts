import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({

  selector: 'app-chart',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <!-- <div style="height: 100%; width: 100%;"> -->
          <!-- Aquí integrarías tu librería de gráficos favorita -->
          <!-- <p>Gráfico {{type}} con datos: {{data | json}}</p> -->
          <!-- <p>Labels: {{labels | json}}</p> -->
        <!-- </div> -->
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
  `],
  imports: [MatCardModule]
})
export class ChartComponent {
  @Input() title: string = '';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() type: string = 'bar';
}