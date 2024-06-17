import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OurProcessComponent } from "./our-process-layout/our-process.component";


const routes: Routes = [
  {
    path: "",
    component: OurProcessComponent,

    children: [

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessRoutingModule { }
