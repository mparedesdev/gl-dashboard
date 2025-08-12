import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartComponent } from '../../plantillas/chart';
import { StatsCardComponent } from '../../plantillas/stats-card';
import { DataTableComponent } from '../../plantillas/data-table';
import { MatCardModule } from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { CharacterListComponent } from "../shared/characterList/characterList.component";


interface Widget {
  id: number;
  title: string;
  subtitle: string;

}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [
    MatGridListModule, MatCardModule, MatInputModule,
    CharacterListComponent
]
})
export class MainComponent  {

  title=signal('');
  subtitle=signal('');

  widgets=signal<Widget[]>([
    { id: 1, title: 'Widget 1', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Widget 2', subtitle: 'Subtitle 1' },
    { id: 3, title: 'Widget 3', subtitle: 'Subtitle 1' },
  ])

  agregarCard(){
    this.widgets.update(w=> [...w, { id: w.length + 1, title: this.title(), subtitle: this.subtitle() }]);
  }

  }


  // crea una app con angular 20, angular material y leafs para los mapas, dame el codigo html y el ts para que funcione correctamente, usa signals para los valores, y comunicacion entre componentes que sean similares para que se puedan reciclar



// con angular 20 genera un dashboard que aparezca en todas las patallas con las opciones (Anio, zona, provinica, region, parroquia), un nav con las opciones (informacion principal, seguimineto y monitoreo),

// en la pagina  informacion principal las opciones de uso de suelo y ectareas con un diagrama de pastel, otra parte con principales cultivos permanentes y principales cultivos trancitorios abos con un diagrama de barras con las opciones (cacao, maiz duro, arroz, palma aricana y platano) y una ultima pestania con exitencia de animales unidades que tiene unicamente la cantidad y son (ganado vacuno, pollos, ganado porcion y ganado ovino)

// en la de seguimiento y monitoreo muestra un mapa del ecuador y que cada provinicia este con un color dependiendo de que tantos levantamiento se haya echo en esa mismo
// Por ultimo pon el titulo en el dashboard "RENAGRO", usa angular 20 y angular material, para el mapa usa la herramienta leaflet 