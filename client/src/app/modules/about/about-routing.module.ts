import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutLayoutComponent } from "./about-layout/about-layout.component";
const routes: Routes = [
  {
    path: "",
    component: AboutLayoutComponent,
    children: [],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
