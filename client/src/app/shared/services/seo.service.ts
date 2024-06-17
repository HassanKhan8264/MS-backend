import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMeta(name: string, content: string) {
    this.metaService.addTag({ name, content });
  }
}
