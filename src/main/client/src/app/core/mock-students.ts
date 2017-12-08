import { Student } from './student';
import { Course } from './course';

export const STUDENT: Student[] = [
  new Student(1, 'Brook', [ new Course(1, 1, 'Math'), new Course(2, 1, 'Englist') ]),
  new Student(2, 'Amber', [ new Course(3, 2, 'Cooking'), new Course(2, 2, 'Englist') ]),
  new Student(3, 'Leo', [ new Course(3, 3, 'Cooking'), new Course(1, 3, 'Math') ])
];
