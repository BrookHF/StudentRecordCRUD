import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../core/student';
import { Course } from '../core/course';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { StudentRecordService } from './student-record.service';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: [ './student-record.component.css' ]
})
export class StudentRecordComponent implements OnInit {
  @Input() student: Student;
  @Output() deleteStudentEvent: EventEmitter<Student> = new EventEmitter<Student>();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ ENTER, COMMA ];

  constructor(private studentRecordService: StudentRecordService) { }

  ngOnInit() { }

  addCourse(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add course
    if ((value || '').trim()) {
      const name = value.trim();
      this.studentRecordService.addCourseToStudent(this.student.id, name)
        .then(newStudent => {
          this.student.courses.push(newStudent);
        });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  deleteCourse(course: any): void {
    const index = this.student.courses.indexOf(course);

    if (index < 0) {
      return;
    }

    this.studentRecordService.deleteCourse(course.id)
      .then(isDeleted => {
        if(isDeleted) {
          this.student.courses.splice(index, 1);
        }
      });
  }

  deleteStudent(student: Student): void {
    this.deleteStudentEvent.emit(student);
  }
}
