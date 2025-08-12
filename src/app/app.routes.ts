import { Routes } from '@angular/router';
import { WidgetComponent } from './components/widget/widget.component';
import { MainComponent } from './components/main/main.component';
import { HeroPageComponent } from './components/hero/hero-page.component';

export const routes: Routes = [
    { path: 'widget', component: WidgetComponent },
    { path: 'main', component: MainComponent },
    { path: 'hero', component: HeroPageComponent },
    {path:'**', redirectTo:''}
];
