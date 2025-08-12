import { Component } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';

const canvas= document.getElementById('livestock-chart')

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
    
  // Tarjetas resumen
  totalSales = 150;
  totalIncome = 48750;
  totalExpenses = 12340;

  // Gráfico de distribución por tipo de ganado (Pie)
  livestockLabels: string[] = ['Vacuno', 'Ovino', 'Caprino', 'Porcino', 'Equino'];
  livestockData: number[] = [45, 25, 15, 10, 5];
  livestockChartType: ChartType = 'pie';
  livestockChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  };

  // Gráfico de ingresos vs egresos (Pie)
  financeLabels: string[] = ['Ingresos', 'Gastos'];
  financeData: number[] = [48750, 12340];
  financeChartType: ChartType = 'pie';
  financeChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  };

  // Historial de transacciones (puedes adaptar esto a tu tabla)
  transactions = [
    { date: '2023-06-15', category: 'Venta', type: 'Vacuno', quantity: 5, amount: 12500 },
    { date: '2023-06-12', category: 'Gasto', type: 'Alimento', quantity: null, amount: 3200 },
    { date: '2023-06-10', category: 'Venta', type: 'Ovino', quantity: 12, amount: 6000 },
    { date: '2023-06-05', category: 'Gasto', type: 'Veterinario', quantity: null, amount: 1500 },
    { date: '2023-06-01', category: 'Venta', type: 'Caprino', quantity: 8, amount: 4800 }
  ];

  // Métodos auxiliares si necesitas formatear datos
  get totalTransactions(): number {
    return this.transactions.length;
  }
}