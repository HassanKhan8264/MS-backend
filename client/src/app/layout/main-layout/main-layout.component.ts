import { CommonService } from "./../../shared/services/common";
import { Component } from "@angular/core";

@Component({
  selector: "ss-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent {
  constructor(private CommonService: CommonService) {}
  openChat() {
    this.CommonService.openWhatsAppChat();
  }
}
