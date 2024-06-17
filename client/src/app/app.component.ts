import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators"; // Note the import statement for rxjs operators
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "ss-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "mystudysolution-spa";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const title = data["title"] || "Default Title";
        const description = data["description"] || "Default Description";
        this.updateMetaTags(title, description);
      });
  }

  updateMetaTags(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag(
      { name: "description", content: description },
      `name='description'`
    );
  }
}
