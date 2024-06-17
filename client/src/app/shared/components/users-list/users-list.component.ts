import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { EndpointService } from './../../../core/http/endpoint.service';
import { CommonService } from './../../services/common';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'ss-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['index', 'name', 'email', 'phone', 'ip'];
  displayedColumnsExam: string[] = [
    'index',
    'name',
    'email',
    'phone',
    'ip',
    'exams',
  ];
  displayedColumnsMess: string[] = [
    'index',
    'name',
    'email',
    'phone',
    'ip',
    'message',
  ];
  dataSource: { regularUsers: any[]; examUsers: any[]; messUsers: any[] } = {
    regularUsers: [],
    examUsers: [],
    messUsers: [],
  };
  private unsubscribe$ = new Subject<void>();

  constructor(
    private commonService: CommonService,
    private endpointService: EndpointService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.commonService.currentUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user) {
          console.log('New user:', user);
          this.getAllUsers();
        }
      });
    this.getAllUsers();
  }

  getAllUsers(): void {
    // Show loader
    const dialogRef = this.dialog.open(SpinnerComponent, {
      panelClass: 'loader-dialog',
    });

    this.endpointService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res: any[]) => {
          const indexedDataRegular = res
            .filter((user) => !user.selectedExamControl && !user.message)
            .map((element, index) => ({ ...element, index: index + 1 }));

          const indexedDataExams = res
            .filter((user) => user.selectedExamControl)
            .map((element, index) => ({ ...element, index: index + 1 }));

          const indexedDataMessage = res
            .filter((user) => !user.selectedExamControl && user.message)
            .map((element, index) => ({ ...element, index: index + 1 }));
          this.dataSource.regularUsers = indexedDataRegular;
          this.dataSource.examUsers = indexedDataExams;
          this.dataSource.messUsers = indexedDataMessage;
          this.dataSource.regularUsers.reverse();
          this.dataSource.examUsers.reverse();
          this.dataSource.messUsers.reverse();

          dialogRef.close();
        },
        error: (error) => {
          console.error('Error fetching data from API:', error);
          dialogRef.close();
          this.showAlertDialog(
            'Error',
            'Failed to fetch users. Please try again later.'
          );
        },
      });
  }

  showAlertDialog(heading: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: { heading: heading, message: message },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
