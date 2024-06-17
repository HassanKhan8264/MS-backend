import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-our-process",
  templateUrl: "./our-process.component.html",
  styleUrls: ["./our-process.component.scss"],
})
export class OurProcessComponent {
  heading = "How it Works / Our Process";
  list = [
    "Sign up and share your course details.",
    "One of our dedicated experts according to your preferred subject will be assigned to you.",
    "The dedicated expert will manage all the Classes, Quizzes, Assignments, Exams & any other Activities on your behalf.",
    "We'll ensure timely submission of your work before the deadlines.",
  ];
}
