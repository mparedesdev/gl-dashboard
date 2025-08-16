import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Widget } from '../../../interfaces/character.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'dragonball-add',
  imports: [MatInputModule,MatFormFieldModule],
  templateUrl: './dragonball-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {


  title = signal('');
  subtitle = signal('');





  newWidget= output<Widget>(); 

  agregarCard() {
    if (!this.title() || !this.subtitle()) {
      return
    }


    const newWidget: Widget = {
      id: Math.floor(Math.random() * 10000),
      title: this.title(),
      subtitle: this.subtitle()
    };


    this.newWidget.emit(newWidget);

    this.title.set('');
    this.subtitle.set('');


  }

}





