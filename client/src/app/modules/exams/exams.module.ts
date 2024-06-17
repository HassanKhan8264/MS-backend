import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ExamsComponent } from "./exams-layout/exams.component";
import { ExamsRoutingModule } from "./exams-routing.module";

@NgModule({
  declarations: [ExamsComponent],
  imports: [CommonModule, ExamsRoutingModule, SharedModule, MaterialModule],
})
export class ExamsModule {
  constructor() { }
}
