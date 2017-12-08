import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatListModule, MatChipsModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule
  ],
})
export class SharedModule { }