import { Component } from "@angular/core";

@Component({
  selector: "ss-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  email = "support@mystudysolution.com";
  companyTitle =
    "At My Study Solution, we provide the resources and support students need to excel in exams and educational activities. Our team is here to help with assignments, exam preparation, and difficult concepts";
  constructor() {}
}
