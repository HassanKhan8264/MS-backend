import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ContactRoutingModule, SharedModule, MaterialModule],
})
export class ContactModule {
  constructor() {}
}
