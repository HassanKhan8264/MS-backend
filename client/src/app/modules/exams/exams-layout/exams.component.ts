import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-exams",
  templateUrl: "./exams.component.html",
  styleUrls: ["./exams.component.scss"],
})
export class ExamsComponent {
  heading = [{ text: "Pay Someone To Do Your Exam!" }];
  fText =
    "Are you worried about your upcoming Exam? Don’t hassle, we have got you covered. We have a team of professionals ready to take your exam. Flying grades are guaranteed at a very reasonable price. Pick a Exam to Fill the Form";

  bgImage = "../../../../assets/images/exam-banner.jpg";
}
