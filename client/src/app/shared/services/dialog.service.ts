import { Router } from "@angular/router";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { UserFormComponent } from "../components/user-form/user-form.component";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { Subject, take, takeUntil, throwError } from "rxjs";
import { CommonService } from "./common";
import { EndpointService } from "../../core/http/endpoint.service";
import { AlertDialogComponent } from "../components/alert-dialog/alert-dialog.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
@Injectable({
  providedIn: "root",
})
export class DialogService implements OnInit, OnDestroy {
  constructor(
    private CommonService: CommonService,
    private router: Router,
    private EndpointService: EndpointService,
    public dialog: MatDialog
  ) {}
  private unsubscribe$ = new Subject<void>();
  ngOnInit(): void {}
  openDialog(data?: any, includeDropMenu?: boolean): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {
        formHeading: "Get Started Now",
        buttonText: "Submit",
        inputWidth: true,
        item: data,
        dropMenu: includeDropMenu ? true : undefined,
      },
      hasBackdrop: true,
      disableClose: true,
      autoFocus: false,
    });

    dialogRef.componentInstance.payload.subscribe((result) => {
      console.log("Received form data", result);
      const dialogRefSpinner = this.dialog.open(SpinnerComponent, {
        panelClass: "loader-dialog",
      });
      this.EndpointService.createUser(result)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (result) => {
            if (result) {
              this.CommonService.updateUser(result);
              dialogRef.close();
              dialogRefSpinner.close();
              this.showAlertDialog(
                "Form Submitted Successfully!",
                "Your form has been submitted. Thank you!"
              );
            }
          },
          error: (error) => {
            console.error("An error occurred:", error);
            dialogRef.close();
            dialogRefSpinner.close();
            this.showAlertDialog(
              "Error",
              "There was an error while submitting the form. Please try again later."
            );
            return throwError(error);
          },
        });
    });
  }

  showAlertDialog(heading: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: { heading: heading, message: message },
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
