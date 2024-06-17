import { Injectable } from "@angular/core";
import { CountUp } from "countup.js";

@Injectable({
  providedIn: "root",
})
export class CountingService {
  startCountUp(targetId: any, endValue: any, duration?: any) {
    const options = {
      duration: duration || 2,
    };

    const countUp = new CountUp(targetId, endValue, options);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
}
