import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/services/car-interface";
import { ChartService } from "src/app/services/chart.service";
import { ScreenService } from "src/spa/services/screen.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  @Input() data: Array<Car>;

  public barChartLabels = new Array<string>();
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {
      data: [],
      label: "",
      backgroundColor: []
    }
  ];

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    if (this.data.length > 0) {
      this.data.forEach(car => {
        this.barChartLabels.push(car.name + " " + car.model);
        this.barChartData[0].data.push(car.orders);
        this.barChartData[0].label = "Number of orders during the year";
        this.barChartData[0].backgroundColor.push(
          this.chartService.getRandomColor()
        );
      });
    }
  }
}
