import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ExamsRoutingModule } from "./exams-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ExamsRoutingModule, SharedModule, MaterialModule],
})
export class ExamsModule {
  constructor() {}
}
