import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MetaService {
  constructor(private meta: Meta, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateMetaTags());
  }

  private updateMetaTags(): void {
    const currentUrl = this.router.url;
    if (currentUrl === "/home") {
      this.meta.updateTag({
        name: "description",
        content: "Welcome to Home Page",
      });
      this.meta.updateTag({ name: "keywords", content: "home, welcome" });
    } else if (currentUrl === "/about") {
      this.meta.updateTag({
        name: "description",
        content: "Learn more about us",
      });
      this.meta.updateTag({ name: "keywords", content: "about, company" });
    }
    // Add conditions for other routes
  }
}
