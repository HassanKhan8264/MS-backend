import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamsComponent } from "./exams-layout/exams.component";

const routes: Routes = [
  {
    path: "",
    component: ExamsComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "content",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule { }
