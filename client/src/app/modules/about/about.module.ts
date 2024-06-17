
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutLayoutComponent } from "./about-layout/about-layout.component";
@NgModule({
  declarations: [AboutLayoutComponent,

  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule, MaterialModule],
})
export class AboutModule {
  constructor() { }
}
