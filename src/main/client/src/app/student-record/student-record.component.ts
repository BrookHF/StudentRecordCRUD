import { Component, OnInit } from '@angular/core';
import { Student } from '../core/student';
import { Course } from '../core/course';
import { Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {
  @Input() student: Student;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  constructor() { }

  ngOnInit() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add course
    if ((value || '').trim()) {
      this.student.courses.push({
        id: 1,
        studentId: this.student.id,
        name: value.trim(),
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(course: any): void {
    const index = this.student.courses.indexOf(course);

    if (index >= 0) {
      this.student.courses.splice(index, 1);
    }
  }
}
