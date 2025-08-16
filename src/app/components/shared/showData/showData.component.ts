import { ChangeDetectionStrategy, Component, ElementRef, input, ViewChild } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-show-data',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './showData.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDataComponent { 
  name=input<string>();
  

}
