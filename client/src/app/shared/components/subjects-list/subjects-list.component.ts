import { Component, Input } from "@angular/core";
import { SubjectsService } from "../../services/subjects";

@Component({
  selector: "ss-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.scss"],
})
export class SubjectsListComponent {
  @Input() homeCourse: any;
  courses: any[];
  @Input() detailBtn = false;

  constructor(private subjectsList: SubjectsService) {}

  ngOnInit() {
    this.courses = this.subjectsList.getCourses();
    if (this.homeCourse) {
      this.courses = this.homeCourse;
    }
  }
}
