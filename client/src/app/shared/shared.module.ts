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
import { PricingComponent } from "./components/pricing/pricing.component";
import { PageLayoutComponent } from "./components/page-layout/page-layout.component";
import { AlertDialogComponent } from "./components/alert-dialog/alert-dialog.component";
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { OurProcessContentComponent } from "./components/our-process-content/our-process-content.component";
import { ExamsListComponent } from "./components/exams-list/exams-list.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

const components = [
  UserFormComponent,
  PageLayoutComponent,
  FooterComponent,
  AnimatedCompComponent,
  AdminComponent,
  StatsCardComponent,
  OnlineAssistanceOfferComponent,
  SubjectsListComponent,
  PricingComponent,
  AlertDialogComponent,
  BenefitsComponent,
  ExamsListComponent,
  OurProcessContentComponent,
  UsersListComponent,
  SpinnerComponent,
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
