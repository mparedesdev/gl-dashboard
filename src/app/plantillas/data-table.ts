import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-data-table',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <!-- <table mat-table [dataSource]="data" class="mat-elevation-z1">
          <ng-container *ngFor="let column of getColumns()" [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef>{{column | titlecase}}</th>
            <td mat-cell *matCellDef="let row">{{row[column]}}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="getColumns()"></tr>
          <tr mat-row *matRowDef="let row; columns: getColumns();"></tr>
        </table> -->
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    mat-card-content {
      flex: 1;
      overflow: auto;
    }
    table {
      width: 100%;
    }
  `],
  imports: [MatCardModule]
})
export class DataTableComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];

  getColumns(): string[] {
    if (this.data.length === 0) return [];
    return Object.keys(this.data[0]);
  }
}