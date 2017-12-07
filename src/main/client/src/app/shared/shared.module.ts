import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatListModule, MatGridListModule, MatChipsModule } from '@angular/material';

/* custom components */
import { StudentRecordComponent } from './student-record/student-record.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule
  ],
  declarations: [
    StudentRecordComponent
  ],
  exports: [
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,

    StudentRecordComponent
  ]
})
export class SharedModule { }