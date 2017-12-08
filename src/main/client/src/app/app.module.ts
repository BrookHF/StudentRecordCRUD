import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StudentRecordComponent} from './student-record/student-record.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StudentRecordService } from './student-record/student-record.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentRecordComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [StudentRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
