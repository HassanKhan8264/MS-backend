import { SeoService } from "./shared/services/seo.service";
import { Component } from "@angular/core";

@Component({
  selector: "ss-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "mystudysolution-spa";

  constructor(private seoService: SeoService) {}
  ngOnInit() {
    // this function add title and description dynamic in index.html from frontend
    this.seoService.addTags();
  }
}
