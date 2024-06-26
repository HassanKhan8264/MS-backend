import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();
  constructor() {}

  // update user after added in admin pnanal on runtime
  updateUser(user: any) {
    this.userSource.next(user);
  }

  // open whatsapp function
  openWhatsAppChat() {
    const whatsappURL = "https://wa.me/13155619270";

    if (this.isMobileDevice()) {
      window.open(whatsappURL, "_blank");
    } else {
      if (this.isWhatsAppWebAccessible()) {
        window.open(whatsappURL, "_blank");
      } else {
        alert(
          "WhatsApp is not installed on your device or WhatsApp Web is not accessible."
        );
      }
    }
  }
  isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  isWhatsAppWebAccessible(): boolean {
    return true;
  }
}
