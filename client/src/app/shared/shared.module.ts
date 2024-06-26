import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { FooterComponent } from "../layout/components/footer/footer.component";
import { AnimatedCompComponent } from "./components/animated-comp/animated-comp.component";
import { AdminComponent } from "./components/admin/admin.component";
import { CommonService } from "./services/common";
import { StatsCardComponent } from "./components/stats-card/stats-card.component";
import { OnlineAssistanceOfferComponent } from "./components/online-assistance-offer/online-assistance-offer.component";
import { SubjectsService } from "./services/subjects";
import { SubjectsListComponent } from "./components/subjects-list/subjects-list.component";
import { PageLayoutComponent } from "./components/page-layout/page-layout.component";
import { AlertDialogComponent } from "./components/alert-dialog/alert-dialog.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { OurProcessContentComponent } from "./components/our-process-content/our-process-content.component";
import { ExamsListComponent } from "./components/exams-list/exams-list.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { SubjectsComponent } from "../modules/subjects/subjects/subjects.component";
import { OurProcessComponent } from "../modules/our-process/our-process-layout/our-process.component";
import { HomeLayoutComponent } from "../modules/home/home-layout/home-layout.component";
import { ExamsComponent } from "../modules/exams/exams-layout/exams.component";
import { ContactLayoutComponent } from "../modules/contact/contact-layout/contact-layout.component";
import { AboutLayoutComponent } from "../modules/about/about-layout/about-layout.component";
import { HeaderComponent } from "../layout/components/header/header.component";
import { MainLayoutComponent } from "../layout/main-layout/main-layout.component";
import { SubnavPrimaryComponent } from "../layout/components/subnav-primary/subnav-primary.component";

const components = [
  UserFormComponent,
  PageLayoutComponent,
  FooterComponent,
  AnimatedCompComponent,
  AdminComponent,
  StatsCardComponent,
  OnlineAssistanceOfferComponent,
  SubjectsListComponent,
  AlertDialogComponent,
  BenefitsComponent,
  ExamsListComponent,
  OurProcessContentComponent,
  UsersListComponent,
  SpinnerComponent,
  SubjectsComponent,
  OurProcessComponent,
  HomeLayoutComponent,
  ExamsComponent,
  ContactLayoutComponent,
  AboutLayoutComponent,
  HeaderComponent,
  MainLayoutComponent,
  SubnavPrimaryComponent,
];

const services = [CommonService, SubjectsService];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ...services,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  exports: [
    ...components,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...services],
    };
  }
}
