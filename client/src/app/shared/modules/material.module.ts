import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

// Navigation
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

// Layouty
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";

// Indicators
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";

// Popups & Modals
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";

// Data Table
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

import { MatChipsModule } from "@angular/material/chips";
import { OverlayModule } from "@angular/cdk/overlay";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

const componentModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatRippleModule,
  MatExpansionModule,
  MatListModule,
  MatSnackBarModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatRadioModule,
  MatTooltipModule,
  MatChipsModule,
  MatStepperModule,
  MatProgressBarModule,
  MatTabsModule,
  OverlayModule,
  ScrollingModule,
  DragDropModule,
  MatTableModule,
  MatAutocompleteModule,
  MatSortModule,
  ClipboardModule,
  MatPaginatorModule,
];

@NgModule({
  imports: [...componentModules],
  exports: [...componentModules],
  providers: [],
  declarations: [],
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "whatsapp",
      sanitizer.bypassSecurityTrustResourceUrl("assets/icons/whatsapp.svg")
    );
  }
}
