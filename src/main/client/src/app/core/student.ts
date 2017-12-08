import { Course } from './course';

export class Student {
  constructor(public id: number, public name: string, public courses: Course[]) { }
}
