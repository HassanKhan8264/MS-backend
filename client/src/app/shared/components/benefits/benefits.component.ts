import { Component, Input } from "@angular/core";

@Component({
  selector: "ss-benefits",
  templateUrl: "./benefits.component.html",
  styleUrls: ["./benefits.component.scss"],
})
export class BenefitsComponent {
  @Input() heading: any;
  @Input() aboutSubHeading: any;
  @Input() text: any;
  @Input() list: any;
  @Input() storyList: any;
  @Input() ourStory: any;
  @Input() ourValues: any;
  @Input() valuesList: any;
  @Input() ourTeam: any;
  @Input() teamList: any;
  @Input() ourPurpose: any;
  @Input() purposeList: any;
  @Input() ourCommunity: any;
  @Input() communityList: any;
  @Input() homePageContent: boolean = true;
  ogHeading = "Essay Writing Service";
  ogText =
    "At My Study Solution, we understand the importance of well-crafted essays in academic success. Our essay writing service is designed to provide high school and university students with top-notch  essays that meet their specific needs.";
  ogSubHeading =
    "Are you struggling with essay writing? Our professional writers are here to help!";
  ogWhyHeading = "Why Choose Our Essay Writing Service?";
  whyWeList = [
    {
      title: "Professional Writers",
      description:
        "Our team of experienced writers hold degrees in various fields and have a proven track record of producing high-quality essays.",
    },
    {
      title: "Customized Essays",
      description:
        "We tailor our essays to meet your specific requirements, ensuring that your voice and perspective shine through.",
    },
    {
      title: "Original Content / Plagiarism Free",
      description:
        "We guarantee 100% original and plagiarism-free essays, so you can submit your work with confidence.",
    },
  ];
  affordHeading = "Affordable Academic Support for All!";
  affordText =
    "We believe that every student deserves access to high-quality academic support, regardless of their financial situation. That's why we offer affordable services that fit your budget.";
  communityHeading = "Our Commitment to Affordability:";
  communityListItems = [
    "We offer competitive pricing for all services.",
    "We provide flexible payment plans to suit your needs.",
    "We offer discounts for long-term commitments and package deals.",
  ];
  benefitsHeading = "Benefits";
  benefitText = "Here are some additional benefits of taking our services:";
  benefitsList = [
    {
      title: "Regular Progress Monitoring and Feedback:",
      description:
        "We provide regular progress updates and feedback to students ensuring you are informed and aligned.",
    },
    {
      title: "Personalized Plans:",
      description:
        "We will provide services depending on your specific needs & wants.",
    },
    {
      title: "Better Grades and Academic Performance:",
      description:
        "Our professionals will help you achieve better grades and improve your overall academic performance.",
    },
    {
      title: "More Free Time:",
      description:
        "For your personal extracurricular activities or personal interests. More free time to pursue your interests and passions.",
    },
    {
      title: "Increased Confidence and Motivation:",
      description:
        "Our supportive and encouraging environment helps students build confidence and develop a growth mindset, driving them to achieve their professional life goals.",
    },
    {
      title: "Flexibility and Convenience:",
      description:
        "Our services offer flexible scheduling and online accessibility, making it easy for students.",
    },
    {
      title: "Access to Expert Resources:",
      description:
        "Our team of experienced professionals and educators have a wealth of knowledge and resources to help students succeed.",
    },
    {
      title: "Stress and Anxiety:",
      description:
        "Our guidance/services and support help students manage their academic workload and reduce stress and anxiety.",
    },
  ];
}
