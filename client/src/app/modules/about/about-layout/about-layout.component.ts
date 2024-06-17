import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-about-layout",
  templateUrl: "./about-layout.component.html",
  styleUrls: ["./about-layout.component.scss"],
})
export class AboutLayoutComponent {
  heading = "About Us";
  fTextStrong =
    "At MY STUDY SOLUTION, we're committed to helping students achieve academic success...";
  fText =
    "We believe in the potential of every student and are dedicated to helping them succeed...";
  aboutHeading = [{ text: "Welcome to", strong: "MY STUDY SOLUTION" }];
  aboutSubHeading = "Our / Academic Guarantee:";
  text =
    "At MY STUDY SOLUTION, we're committed to helping students achieve academic success. Our team of experts and professionals will work closely with each student to provide personalized support. we're confident in our ability to help students achieve good grades. As such,";
  ourStory = "Our Story:";
  ourValues = "Our Values:";
  ourTeam = "Our Team:";
  ourPurpose = "Our Purpose:";
  ourCommunity = "Join Our Community:";

  list = [
    {
      text:
        "We offer the following guarantee Students who avail our services will achieve better grades and improve your overall academic performance. ",
    },
    {
      text:
        "We believe in the potential of every student and are dedicated to helping them succeed. With our expert support and guidance, we're confident that students will achieve their academic goals.",
    },
    {
      text:
        "We're a team of dedicated professionals passionate about supporting students in their academic journey. Our mission is to provide high-quality academic assistance to high school and university students, helping them succeed in their studies and achieve their goals.",
    },
  ];

  storyList = [
    {
      text:
        "We understand the challenges of academic life, from tight deadlines to complex assignments and quizzes. Our team has experienced these struggles firsthand, and we're committed to making a difference. With MY STUDY SOLUTION, we aim to provide a supportive and inclusive environment where students can thrive. ",
    },
  ];
  valuesList = [
    {
      strong: "Excellence:",
      text: "We strive for exceptional quality in everything we do.",
    },
    {
      strong: "Integrity:",
      text: " We maintain the highest ethical standards in our work.",
    },
    {
      strong: "Empathy:",
      text:
        " We understand the struggles of academic life and are here to help.",
    },
    {
      strong: "Innovation:",
      text:
        " We continuously improve our services to meet the evolving needs of students.",
    },
  ];
  teamList = [
    {
      text:
        "Our team consists of experienced educators and professionals with a deep understanding of the academic landscape. We have experts in various subjects, ensuring that students receive specialized support tailored to their needs.",
    },
  ];
  purposeList = [
    {
      text:
        "We believe that every student deserves access to quality academic support. Our purpose is to provide a platform where students can find help and resources to succeed in their studies. We're committed to making a positive impact on students' lives and helping them achieve their goals. ",
    },
  ];
  communityList = [
    {
      text:
        "We invite you to explore our services and join our community of students and educators. Together, let's achieve academic success and build a brighter future.",
    },
  ];
}
