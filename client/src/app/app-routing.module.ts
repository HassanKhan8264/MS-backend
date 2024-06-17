import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminComponent } from "./shared/components/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },

      {
        path: "home",
        loadChildren: () =>
          import("./modules/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "contact",
        data: {
          title: "Online Class Help - Perfect Class Guide - Get Free Quote",
          description:
            "Are you struggling with your Online Classes? Pay Someone For Your Online Class. Our services are 100% secure , ensuring your privacy and academic integrity. Whether you need help with a single task or ongoing support throughout the semester, we are here to help you succeed.",
        },
        loadChildren: () =>
          import("./modules/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
      {
        path: "subjects",
        data: {
          title: "Need Help For Courses - Online Class Solution",
          description:
            "Want to Pay Someone to Do Your Online Course or Class? My Study Solution has Professionals & Experts designed to empower students to achieve their academic excellence without doing all the hectic work.",
        },
        loadChildren: () =>
          import("./modules/subjects/subjects.module").then(
            (m) => m.SubjectsModule
          ),
      },
      {
        path: "about",

        loadChildren: () =>
          import("./modules/about/about.module").then((m) => m.AboutModule),
      },
      {
        path: "process",
        data: {
          title: '"Need Help In Online Class - Online Class Process',
          description:
            "Are you finding it difficult to keep up with your online classes? At My Study Solution You Can Pay Someone To Take Your Online Class on your behalf. Submit your needs, get matched with one of our Experts, collaborate seamlessly, pay securely, track your progress & achieve your academic goals with ease.",
        },
        loadChildren: () =>
          import("./modules/our-process/process.module").then(
            (m) => m.ProcessModule
          ),
      },
      {
        path: "exams",
        data: {
          title: '"Proctor Exam Help - Online Exam Help',
          description:
            "Pay Someone To Do Your Online Exam with My Study Solution. We give assurance that our process is 100% secure. We will take the Exam on your behalf and ensure you get the results you need.",
        },
        loadChildren: () =>
          import("./modules/exams/exams.module").then((m) => m.ExamsModule),
      },
      {
        path: "admin",
        component: AdminComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
