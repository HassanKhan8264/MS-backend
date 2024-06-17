import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from "../../shared/modules/material.module";
@NgModule({
  declarations: [HomeLayoutComponent,

  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
})
export class HomeModule {
  constructor() { }
}
