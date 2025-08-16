import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Widget } from '../../../interfaces/character.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'dragonball-character-list',
  imports: [MatCardModule],
  templateUrl: './characterList.component.html',
})
export class CharacterListComponent {
  widgets=input<Widget[]>()
  listName=input<string>()
}
