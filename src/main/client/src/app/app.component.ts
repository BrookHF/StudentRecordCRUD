import { Component, OnInit } from '@angular/core';
import { Student } from './core/student';
import { Course } from './core/course';
import { StudentRecordService } from './student-record/student-record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  students: Student[];

  constructor(private studentRecordService: StudentRecordService) {}

  ngOnInit(): void {
    this.students = this.studentRecordService.getStudentRecordes();
  }

}
