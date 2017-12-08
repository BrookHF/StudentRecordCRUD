import { Injectable } from '@angular/core';

import { Student } from '../core/student';
import { Course } from '../core/course';
import { STUDENT } from '../core/mock-students';
import { error } from 'util';

@Injectable()
export class StudentRecordService {
  getStudentRecordes(): Promise<Student[]> {
    return Promise.resolve(STUDENT);
  }

  addStudent(name: string): Promise<Student> {
    if (!name) {
      return Promise.reject(new Error('Name is required'));
	}
	const randomId = Math.floor(Math.random() * 10000);
    return Promise.resolve(new Student(randomId, name, []));
  }

  deleteStudent(id: number): Promise<boolean> {
    if (!id) {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }

  addCourseToStudent(studentId: number, name: string): Promise<Course> {
    if (!studentId || !name) {
      return Promise.reject(new Error('Name and studentId is required'));
	}
	const randomId = Math.floor(Math.random() * 10000);
    return Promise.resolve(new Course(randomId, studentId, name));
  }

  deleteCourse(id: number) {
    if (!id) {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }

}
