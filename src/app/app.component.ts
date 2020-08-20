import { Component } from '@angular/core';
import 'chart.js';
// import {BaseChartDirective} from 'ng2-charts/ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { MultiDataSet } from 'ng2-charts';


// @Directive({
//   selector: '.canvasContainer'
//  })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'project1';
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    [80, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public doughnutColors:any[] = [
    { backgroundColor: ["blue", "yellow"] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }];

    chartOptions = {
      cutoutPercentage: 80,
      text:'60%'
      // elements:{
      //   center:{
      //     text:'60%',
      //     color: '#36A2EB', //Default black
      // fontStyle: 'Helvetica', //Default Arial
      // sidePadding: 15 //Default 20 (as a percentage)
      //   }
      
    };
  // public onToggleSidenav = () => { 
  //   this.sidenavToggle.emit();
  // }
  // // type = 'LineChart';
  // lineChartType = 'LineChart';
  //  data = [
  //     ["Jan",  7.0, -0.2, -0.9, 3.9],
  //     ["Feb",  6.9, 0.8, 0.6, 4.2],
  //     ["Mar",  9.5,  5.7, 3.5, 5.7],
  //     ["Apr",  14.5, 11.3, 8.4, 8.5],
  //     ["May",  18.2, 17.0, 13.5, 11.9],
  //     ["Jun",  21.5, 22.0, 17.0, 15.2],
  //     ["Jul",  25.2, 24.8, 18.6, 17.0],
  //     ["Aug",  26.5, 24.1, 17.9, 16.6],
  //     ["Sep",  23.3, 20.1, 14.3, 14.2],
  //     ["Oct",  18.3, 14.1, 9.0, 10.3],
  //     ["Nov",  13.9,  8.6, 3.9, 6.6],
  //     ["Dec",  9.6,  2.5,  1.0, 4.8]
  //  ];
  // //  columnNames = ["Month", "Tokyo", "New York","Berlin", "Paris"];
  //  options = {   
  //     // hAxis: {
  //     //    title: 'Month'
  //     // },
  //     // vAxis:{
  //     //    title: 'Temperature'
  //     // },
  //     // curveType: 'function',
  //     legend: { position: 'bottom' }
  //  };
  //  width = 550;
  //  height = 400;

  // // lineChartData: ChartDataSets[] = [
  // //   { data: [72,73.5,74.5,75,75.5,76.5,79], label: 'Your portfolio value 0.00 BTC' },

  // // ];

  // lineChartLabels: Label[] = ['12 JUN', '14 JUN', '16 JUN', '18 JUN', '20 JUN', '22 JUN','24 JUN'];

  // // lineChartOptions = {
  // //   responsive: true,
  // // };

  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'blue',
      
  //   },
  // ];

  // lineChartLegend = true;
  // lineChartPlugins = [];
  // // 

  
}
