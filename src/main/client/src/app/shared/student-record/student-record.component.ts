import { Component, OnInit } from '@angular/core';
import { Student } from '../../core/student';
import { Course } from '../../core/course';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  student: Student = new Student(
    1, 'brook', [
      new Course(1, 1, 'math'),
      new Course(2, 1, 'english')
    ]
  )
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  constructor() { }

  ngOnInit() {
    console.log('student', Student);
  }

  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
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
