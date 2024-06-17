import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactLayoutComponent } from "./contact-layout/contact-layout.component";

const routes: Routes = [
  {
    path: "",
    component: ContactLayoutComponent,
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
export class ContactRoutingModule {}
