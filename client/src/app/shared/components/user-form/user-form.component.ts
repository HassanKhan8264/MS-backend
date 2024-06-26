import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  Inject,
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SubjectsService } from "../../services/subjects";
import { MatSelectChange } from "@angular/material/select";

interface IPayload {
  name: string;
  email: string;
  phone: string;
  message?: string;
  selectedExamControl?: string;
}

@Component({
  selector: "ss-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Input() width: any;
  @Input() submitBtn: string;
  @Input() formHeading: string;
  @Input() showMessageField: boolean = false;
  @Input() cancel: boolean = true;
  @Output() payload = new EventEmitter<IPayload>();
  userInfoForm: FormGroup;
  exams: any[];
  selected: any;
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subjectList: SubjectsService
  ) {}

  ngOnInit(): void {
    this.exams = this.subjectList.getExams();
    if (this.data.dropDown) {
      this.userInfoForm.addControl(
        "selectedExamControl",
        new FormControl("", [Validators.required])
      );
    }

    this.userInfoForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(255),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern(/^[+\d\s\-\(\)]*$/),
      ]),
      message: new FormControl("", []),
    });
    if (this.data.dropMenu) {
      this.userInfoForm.addControl(
        "selectedExamControl",
        new FormControl(this.data.item.name || "", [Validators.required])
      );
    }

    if (!this.showMessageField) {
      this.userInfoForm.removeControl("message");
    }
  }

  selectedItem(event: MatSelectChange): void {
    this.userInfoForm.get("selectedExamControl")?.setValue(event.value);
  }
  onSubmit(formDirective): void {
    if (this.userInfoForm.invalid) {
      return;
    }
    const formData = this.userInfoForm.value;

    const userDataToSend = {
      ...formData,
      message: formData.message ? formData.message : null,
    };
    const payload: IPayload = this.userInfoForm.value;

    // go to admin panal function
    if (this.isAdminCredentials(payload)) {
      this.navigateToAdmin();
    } else {
      this.emitPayload(payload);
      formDirective.resetForm();
      this.userInfoForm.reset();
    }
  }
  isAdminCredentials(payload: IPayload): boolean {
    if (payload) {
      const adminName = "ali";
      const adminEmail = "ali@gmail.com";
      const adminPhone = "12345678";

      return (
        payload.name == adminName &&
        payload.email == adminEmail &&
        payload.phone == adminPhone
      );
    }
    return false;
  }

  navigateToAdmin(): void {
    this.router.navigate(["/admin"]);
    this.dialogRef.close();
  }
  emitPayload(payload: any): void {
    this.payload.emit(payload);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
