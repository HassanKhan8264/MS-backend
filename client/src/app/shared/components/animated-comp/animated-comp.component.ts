import { CommonService } from "./../../services/common";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from "@angular/core";
import { DialogService } from "../../services/dialog.service";

@Component({
  selector: "ss-animated-comp",
  templateUrl: "./animated-comp.component.html",
  styleUrls: ["./animated-comp.component.scss"],
  animations: [
    trigger("slideUpAnimation", [
      state(
        "show",
        style({
          transform: "translateY(-100%)",
        })
      ),
      transition("show => hide", [animate("0.5s")]),
    ]),
  ],
})
export class AnimatedCompComponent implements AfterViewInit {
  @Input() heading: any;
  @Input() fTextStrong: any;
  @Input() fText: any;
  @Input() sText: any;
  @Input() fList: any;
  @Input() list: any;
  @Input() lText: any;
  @Input() height: any;
  @Input() imagePath: any;
  @Input() actions: boolean = true;
  @Input() dialogFormBtn: boolean = true;
  @Input() subHeading: any;

  cancel = false;
  state = "show";

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = "hide";
    }, 50);
  }

  constructor(
    private openDialogForm: DialogService,
    private CommonService: CommonService
  ) {}
  openWhatsAppChat() {
    this.CommonService.openWhatsAppChat();
  }

  openDialog(): void {
    this.openDialogForm.openDialog(null, false);
  }

  ngOnDestroy() {}
}
