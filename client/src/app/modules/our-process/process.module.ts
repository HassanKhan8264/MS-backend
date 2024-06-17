import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { CDK_DRAG_CONFIG } from "@angular/cdk/drag-drop";
import { MaterialModule } from "../../shared/modules/material.module";
import { OurProcessComponent } from "./our-process-layout/our-process.component";
import { ProcessRoutingModule } from "./process-routing.module";


@NgModule({
  declarations: [OurProcessComponent,

  ],
  imports: [CommonModule, ProcessRoutingModule, SharedModule, MaterialModule],
})
export class ProcessModule {
  constructor() { }
}
