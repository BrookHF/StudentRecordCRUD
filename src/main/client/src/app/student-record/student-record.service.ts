import { Injectable } from '@angular/core';

import { Student } from '../core/student';
import { STUDENT } from '../core/mock-students';

@Injectable()
export class StudentRecordService {
  getStudentRecordes(): Student[] {
    return STUDENT;
  }
}
