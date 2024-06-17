import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"],
})
export class SubjectsComponent {
  heading = [{ text: "We Cater 90+ Subjects." }];
  sText = "We offer the following guarantee:";
  fTextStrong = [
    {
      strong: "At My Study Solution",
      text2:
        "We're committed to helping students achieve academic success. Our team of experts and professionals work closely with each student to provide personalized support. we're confident in our ability to help students achieve good grades. As such,",
    },
  ];
  fList = [
    {
      text:
        "We're confident in our ability to help you succeed. If you're not satisfied with our services, we'll work with you to make it right.",
    },
    {
      text:
        "We believe in the potential of every student and are dedicated to helping them succeed. With our expert support and guidance, we're confident that students will achieve their academic goals.",
    },
  ];
  list = [
    "Hire US-based experts for over 90+ subjects",
    "Flexible payment plans",
    "Customer friendly refund policy",
  ];
  bgImage = "assets/images/course-banner.jpg";
}
