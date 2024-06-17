import { Component, OnInit } from "@angular/core";
import { CountingService } from "../../services/counting.service";

@Component({
  selector: "ss-stats-card",
  templateUrl: "./stats-card.component.html",
  styleUrls: ["./stats-card.component.scss"],
})
export class StatsCardComponent implements OnInit {
  constructor(private countingService: CountingService) {}
  ngOnInit() {
    this.countingService.startCountUp("students-count", 45542, 6);
    this.countingService.startCountUp("subjects-count", 10);
    this.countingService.startCountUp("experts-count", 1000, 7);
    this.countingService.startCountUp("success-rate-count", 95, 10);
  }
}
