import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
})
export class HomeLayoutComponent {
  heading = [{ text: "Welcome to", strong: "MY STUDY SOLUTION" }];
  sText = "Pay Someone to Manage Your Coursework On Your Behalf!";
  lText =
    "Our goal is to help you achieve academic success without compromising your precious time & passion. Let us assist you in staying on top of your studies.";
  fTextStrong = [
    {
      text1: "Are you struggling to keep up with your",
      strong: "CLASSES, QUIZZES, ASSIGNMENTS or EXAMS?",
      text2:
        "Do you need help in managing your TIME and COURSEWORK effectively? Do you wish you had more time to focus on your interests and passions? Look no further! Our team of experts is here to help. With our services, you don’t need to worry about any Subject / Course. We will handle your hectic work.",
    },
  ];
  fList = [
    {
      strong: "US-Based Experts:",
      text:
        " Our team is composed of experienced professionals with a deep understanding of the US education system.",
    },
    {
      strong: "Quality Guarantee:",
      text: " We ensure high-quality work and timely submissions.",
    },
    {
      strong: "Affordable Pricing:",
      text: " Our prices are competitive and flexible to fit your budget.",
    },
  ];
  list = [
    "My Online Classes",
    "My Quizzes & Assignments",
    "My Exams",
    "My Homeworks",
    "My Essay Writing",
    "Any other Activities",
    "Deadline Management",
  ];

  subjects = [
    "Algebra",
    "Applied Mathematics",
    "Biology",
    "Business Management",
    "Chemistry",
    "Computer Science",
    "Economics",
    "English Literature",
    "Ethics",
    "Finance & Accounting",
    "Geography",
    "Health Care & Nursing",
    "History",
    "International Relations",
    "Human Resources Management",
    "Marketing",
    "Probability & Statistics",
    "Political Sciences",
  ];
}
