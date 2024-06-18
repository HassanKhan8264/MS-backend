import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "ss-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "mystudysolution-spa";
  constructor() // private router: Router,
  // private activatedRoute: ActivatedRoute,
  // private titleService: Title,
  // private metaService: Meta
  {}

  // ngOnInit(): void {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       let route = this.activatedRoute.firstChild;
  //       while (route?.firstChild) {
  //         route = route.firstChild;
  //       }

  //       route?.data.subscribe((data) => {
  //         const title = data["title"] || "Default Title";
  //         const description = data["description"] || "Default Description";
  //         this.updateMetaTags(title, description);
  //       });
  //     }
  //   });
  // }

  // updateMetaTags(title: string, description: string) {
  //   this.titleService.setTitle(title);
  //   this.metaService.updateTag({ name: "description", content: description });
  // }
}
