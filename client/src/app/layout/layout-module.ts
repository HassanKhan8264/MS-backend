import { MaterialModule } from './../shared/modules/material.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./components/header/header.component";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SubnavPrimaryComponent } from './components/subnav-primary/subnav-primary.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    SubnavPrimaryComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class LayoutModule { }
