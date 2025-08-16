import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { barra } from '../../../interfaces/barra.interface';
import { cantidad } from '../../../interfaces/cantidad.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cantidad-card',
  imports: [MatCardModule],
  templateUrl: './cantidadCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CantidadCardComponent { 


    cantidades=signal<cantidad[]>([
      {titulo:"Ganado Vacuno",valor:150,imagen:"vaca.png"},
      {titulo:"Ganado obvino",valor:550,imagen:"ovino.png"},
      {titulo:"Pollo",valor:250,imagen:"pollo.png"},
    ])
}
