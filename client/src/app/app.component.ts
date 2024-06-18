import { Component } from "@angular/core";

@Component({
  selector: "ss-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "mystudysolution-spa";
  constructor() {}
}
