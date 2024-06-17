import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { SubjectsComponent } from "./subjects/subjects.component";
import { SubjectsRoutingModule } from "./subjects-routing.module";

@NgModule({
  declarations: [SubjectsComponent,

  ],
  imports: [CommonModule, SubjectsRoutingModule, SharedModule, MaterialModule],
})
export class SubjectsModule {
  constructor() { }
}
