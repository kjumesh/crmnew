import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartReadyEvent,
  ChartMouseOverEvent,
  ChartErrorEvent,
  ChartMouseOutEvent,
  ChartSelectEvent
} from "ng2-google-charts";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild("cchart") cchart;
  public selectEvent: ChartSelectEvent;

  public lineChartData: any = {
    chartType: "LineChart",
    dataTable: [
      ["Year", "Sales", "Expenses"],
      ["2004", 1000, 400],
      ["2005", 1170, 460],
      ["2006", 660, 1120],
      ["2007", 1030, 540],
      ["2008", 930, 100],
      ["2009", 530, 940],
      ["2010", 1030, 200]
    ],
    options: { title: "Company Performance" }
  };

  public comboChartData: any = {
    chartType: "ComboChart",
    dataTable: [
      ["Month", "Bolivia"],
      ["2004/05", 0],
      ["2005/06", 135],
      ["2006/07", 157],
      ["2007/08", 139],
      ["2008/09", 165],
      ["2009/10", 210],
      ["2010/11", 260]
    ],
    options: {
      title: "Monthly Coffee Production by Country",
      vAxis: {
        title: "Cups"
      },
      hAxis: { title: "Month" },
      seriesType: "area",
      series: { 1: { type: "line" } },
      height: 400
    }
  };

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }

  constructor() {}

  ngOnInit() {}

  public mouseOver(event: ChartMouseOverEvent) {
    console.log("ChartMouseOverEvent");
    console.log("bb: " + JSON.stringify(event.boundingBox));
    console.log("pos: " + JSON.stringify(event.position));
    console.log("type: " + JSON.stringify(event.columnType));
    console.log("label: " + JSON.stringify(event.columnLabel));
    console.log("value: " + JSON.stringify(event.value));
  }

  public mouseOut(event: ChartMouseOutEvent) {
    console.log("ChartMouseOutEvent");
    console.log("bb: " + JSON.stringify(event.boundingBox));
    console.log("pos: " + JSON.stringify(event.position));
    console.log("type: " + JSON.stringify(event.columnType));
    console.log("label: " + JSON.stringify(event.columnLabel));
    console.log("value: " + JSON.stringify(event.value));
  }
}
