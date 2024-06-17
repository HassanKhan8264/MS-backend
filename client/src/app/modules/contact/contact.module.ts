import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactLayoutComponent } from "./contact-layout/contact-layout.component";

@NgModule({
  declarations: [ContactLayoutComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule, MaterialModule],
})
export class ContactModule {
  constructor() { }
}
