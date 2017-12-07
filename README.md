# Strudent Record CURD

This web application support managing a student record. The goal is to present order, level and efficiency of my code for EVVEMI.

Build with Angular 2 as front end, and Spring Boot as backend.

## Requirement

Project : Implement CRUD ( Create, Read, Update and Delete) using following tech stack.
Frontend : Angular2
Backend : Create Rest End points in Java or any other language / framework you are comfortable with.
Database : MySQL ( Maria DB ) , PostgreSQL, any RDMS
Create two tables in database.

1. Student
1. Course

Feature:

1. Insert a student record
1. Update a student record
1. Delete a student record
1. Find and display students along with student's enrolled courses.

Bonus points : Write few unit tests

## Table

### Student

Name | Type | Description
--- | --- | ---
StudentId | Number | Primary Id
StudentName| String | Student's name

### Course

Name | Type | Description
--- | --- | ---
CourseId | Number | Primary Id
CourseName| String | course's name

### Enrollment

Name | Type | Description
--- | --- | ---
StudentID | Number | foreign key to student
CourseId | Number | foreign key to Course
CourseName | String | course's name add this redundency to improve performance by avoid join

## Frontend

Support features

1. Insert a student record: A buttom to add student
1. Update a student record: A form to add a class to student
1. Delete a student record: A buttom to delete student and a buttom to remove student's course
1. Find and display students along with student's enrolled courses: A form to search students by name, display student and student's course use a card

component: student Card, 

## Backend

Use Spring Data as data access layer, MySQL as data Store.

### API

Name | url | Verb | Description
--- | --- | --- | ---
addStudent | /student | Post | Create a new student
searchStudentByName | /student | get | Search students by thier name
deleteStudent | /student | delete | Delete student along with all thier enrollment
addCourseToStudent | /enrollment | Post | Add a enrollment to student
getEnrollment | /enrollment | get | Get student's course by student Id
deleteEnrollment | /enrollment | delete | Delete enrollment
addCourse | /course | post | Add a course
getCourseByName | /course | get | Get a course's Id by name