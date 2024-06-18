import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "ss-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = "mystudysolution-spa";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.activatedRoute.firstChild?.data.subscribe((data) => {
        const title = data["title"] || "Default Title";
        const description = data["description"] || "Default Description";
        this.updateMetaTags(title, description);
      });
    });
  }

  updateMetaTags(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: "description", content: description });
  }
}
