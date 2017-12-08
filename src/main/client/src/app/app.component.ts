import { Component, OnInit } from '@angular/core';
import { Student } from './core/student';
import { Course } from './core/course';
import { StudentRecordService } from './student-record/student-record.service';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Student Record CRUD';
  students: Student[];

  constructor(private studentRecordService: StudentRecordService) { }

  ngOnInit(): void {
    this.studentRecordService.getStudentRecordes()
      .then(students => this.students = students);
  }

  addStudent(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add student
    if ((value || '').trim()) {
      const name = value.trim();
      this.studentRecordService.addStudent(name)
        .then(newStudent => {
          this.students.push(newStudent);
        });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  deleteStudent(student: Student): void {

    const index = this.students.indexOf(student);
    if (index < 0) {
      return;
    }
    this.studentRecordService.deleteStudent(student.id)
      .then(isDeleted => {
        if (isDeleted) {
          this.students.splice(index, 1);
        }
      });
  }

}
