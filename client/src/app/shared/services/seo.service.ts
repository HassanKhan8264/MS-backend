import { Injectable, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Meta } from "@angular/platform-browser";
@Injectable({
  providedIn: "root",
})
export class SeoService implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {}

  addTags() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }

        route?.data.subscribe((data) => {
          const title = data["title"] || "My Study Solution";
          const description =
            data["description"] ||
            "Study Solution provides comprehensive educational resources and tools for students and educators. Explore study guides, exam tips, subject notes, and more.";
          this.updateMetaTags(title, description);
        });
      }
    });
  }
  updateMetaTags(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: "description", content: description });
  }
}
