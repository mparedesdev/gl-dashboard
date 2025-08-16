import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { barra } from '../../../interfaces/barra.interface';

@Component({
  selector: 'app-barra-card',
  imports: [MatCardModule],
  templateUrl: './barraCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraCardComponent { 

  barras=signal<barra[]>([
    {categoria: "CACAO", valor: 150},
    {categoria: "MAIZ", valor: 550},
    {categoria: "PALMA", valor: 250},
    {categoria: "PLATANO", valor: 300},
  ])

    @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  
  ngAfterViewInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    const canvas = this.barCanvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    // Datos de ejemplo
    const data = this.barras().map(b => b.valor);
    const labels = this.barras().map(b => b.categoria);
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', ];
    
    // Configuración del gráfico
    const barWidth = 50;
    const startX = 50;
    const startY = canvas.height - 50;
    const maxDataValue = Math.max(...data);
    const scale = (canvas.height - 100) / maxDataValue;
    
    // Dibujar ejes
    this.ctx.beginPath();
    this.ctx.moveTo(startX, 30);
    this.ctx.lineTo(startX, startY);
    this.ctx.lineTo(canvas.width - 30, startY);
    this.ctx.strokeStyle = '#000';
    this.ctx.stroke();
    
    // Dibujar barras
    data.forEach((value, index) => {
      const x = startX + 20 + (index * (barWidth + 30));
      const y = startY - (value * scale);
      const height = value * scale;
      
      this.ctx.fillStyle = colors[index];
      this.ctx.fillRect(x, y, barWidth, height);
      
      // Etiquetas de valores
      this.ctx.fillStyle = '#000';
      this.ctx.font = '12px Arial';
      this.ctx.fillText(value.toString(), x + barWidth/2 - 10, y - 5);
      
      // Etiquetas del eje X
      this.ctx.fillText(labels[index], x + barWidth/2 - 15, startY + 20);
    });
    
    // Título del gráfico
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#333';
    this.ctx.fillText('Gráfico de Barras', canvas.width/2 - 60, 20);
  }

}
