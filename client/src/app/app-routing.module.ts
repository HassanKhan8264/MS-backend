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
        loadChildren: () =>
          import("./modules/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
      {
        path: "subjects",
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
        loadChildren: () =>
          import("./modules/our-process/process.module").then(
            (m) => m.ProcessModule
          ),
      },
      {
        path: "exams",
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
