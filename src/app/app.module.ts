import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { studentService } from './service/service';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,HttpClientModule,MatButtonModule],
  declarations: [AppComponent, StudentComponent],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
