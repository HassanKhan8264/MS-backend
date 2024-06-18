import { AfterViewInit, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "../../../shared/services/dialog.service";

@Component({
  selector: "ss-subnav-primary",
  templateUrl: "./subnav-primary.component.html",
  styleUrls: ["./subnav-primary.component.scss"],
})
export class SubnavPrimaryComponent implements AfterViewInit {
  isMobile = false;
  constructor(
    public dialog: MatDialog,
    private openDialogForm: DialogService
  ) {}
  ngAfterViewInit() {
    const handleResize = () => {
      this.isMobile = window.innerWidth <= 1200;
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }
  openDialog(): void {
    this.openDialogForm.openDialog(false);
  }
}
