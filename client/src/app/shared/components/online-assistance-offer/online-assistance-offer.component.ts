import { EndpointService } from "./../../../core/http/endpoint.service";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { DialogService } from "../../services/dialog.service";
import { Subject, take, takeUntil, throwError } from "rxjs";
import { AlertDialogComponent } from "../alert-dialog/alert-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { CommonService } from "../../services/common";
import { SpinnerComponent } from "../spinner/spinner.component";
@Component({
  selector: "ss-online-assistance-offer",
  templateUrl: "./online-assistance-offer.component.html",
  styleUrls: ["./online-assistance-offer.component.scss"],
})
export class OnlineAssistanceOfferComponent implements OnDestroy, OnInit {
  @Input() offerHeading: any;
  @Input() offerText: any;
  private unsubcribe$ = new Subject<void>();
  imagePath: string = "/assets/images/academics.jpg";
  heading = `
    Let Us Take Your Online Class, Complete Your Homework or Quiz For You
  `;
  content = `
    Students often wonder, “Can I pay someone to take my online class for me?” If you are one of such students, you don’t need to worry anymore because we can offer online class help at a cheap price. We offer a range of deals on online class help services, one of which is helping students take their online classes at a very cheap rate and with a guarantee for great results.
  `;

  formHeading = "Sign Up Now 20% off Get Started Today!";
  availDiscount = "Avail Discount Now";
  constructor(
    private CommonService: CommonService,
    private dialog: MatDialog,
    private dialogForm: DialogService,
    private EndpointService: EndpointService
  ) {}
  ngOnInit(): void {}

  openDialog() {
    this.dialogForm.openDialog();
  }
  handleFormSubmit(event) {
    console.log("payload", event);
    console.log("receive form data", event);
    let payload = event;
    const dialogRef = this.dialog.open(SpinnerComponent, {
      panelClass: "loader-dialog",
    });
    this.EndpointService.createUser(payload)
      .pipe(takeUntil(this.unsubcribe$))
      .subscribe({
        next: (data: any) => {
          if (data) {
            this.CommonService.updateUser(data);
            dialogRef.close();
            this.showAlertDialog(
              "Form Submitted Successfully!",
              "Your form has been submitted. Thank you!"
            );
          }
        },
        error: (err: any) => {
          console.error("An error occurred:", err);
          dialogRef.close(); // Close the spinner dialog
          this.showAlertDialog(
            "Error",
            "There was an error while submitting the form. Please try again later."
          );
        },
      });
  }
  showAlertDialog(heading: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: { heading: heading, message: message },
    });
  }
  openWhatsAppChat() {
    this.CommonService.openWhatsAppChat();
  }
  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }
}
