import { Component } from "@angular/core";
import { SubjectsService } from "../../services/subjects";
import { DialogService } from "../../services/dialog.service";

@Component({
  selector: "ss-exams-list",
  templateUrl: "./exams-list.component.html",
  styleUrls: ["./exams-list.component.scss"],
})
export class ExamsListComponent {
  exams: any[];
  selectedExam: any;

  constructor(
    private subjectsList: SubjectsService,
    private openDialogForm: DialogService
  ) {}

  ngOnInit() {
    this.exams = this.subjectsList.getExams();
  }

  openDialog(item) {
    this.selectedExam = item;
    this.openDialogForm.openDialog(this.selectedExam, true);
  }
}
