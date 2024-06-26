import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ProcessRoutingModule } from "./process-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ProcessRoutingModule, SharedModule, MaterialModule],
})
export class ProcessModule {
  constructor() {}
}
