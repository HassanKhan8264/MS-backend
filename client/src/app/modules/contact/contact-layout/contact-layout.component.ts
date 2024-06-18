import { CommonService } from "./../../../shared/services/common";
import { Subject, take, takeUntil, throwError } from "rxjs";
import { EndpointService } from "./../../../core/http/endpoint.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AlertDialogComponent } from "../../../shared/components/alert-dialog/alert-dialog.component";
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-contact-layout",
  templateUrl: "./contact-layout.component.html",
  styleUrls: ["./contact-layout.component.scss"],
})
export class ContactLayoutComponent implements OnDestroy, OnInit {
  private unsubscribe$ = new Subject<void>();

  heading = [{ text: " Our Support is available 24/7!" }];
  fText =
    "Thank you for considering our academic support services! We're here to help you succeed in your studies. If you have any questions, need assistance, or would like to learn more about our services, please don't hesitate to reach out.";
  subHeading = "How Can We Help?";
  lText =
    "Whatever your reason, we're here to listen and assist you. Send us a message or give us a call and we'll respond promptly. We look forward to hearing from You!";
  formHeading = "Get In Touch";
  submitBtnText = "Submit";
  email = "info@mystudysolution.com";

  list = [
    "Have a question about our services?",
    "Need help with your CourseWork?",
    "Want to learn more about our online class support?",
    "Have feedback or suggestions?",
  ];
  bgImage = "../../../../assets/images/contact-banner.webp";
  constructor(
    private CommonService: CommonService,
    private dialog: MatDialog,
    private endpointService: EndpointService
  ) {}

  ngOnInit() {}

  formHandler(event: any) {
    console.log("payload", event);
    console.log("receive form data", event);
    let payload = event;
    const dialogRef = this.dialog.open(SpinnerComponent, {
      panelClass: "loader-dialog",
    });

    this.endpointService
      .createUser(payload)
      .pipe(takeUntil(this.unsubscribe$))
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
        error: (error) => {
          console.error("An error occurred:", error);
          dialogRef.close();
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
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
