import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './common/child/child.component';
import { ParentComponent } from './common/parent/parent.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { ArticleComponent } from './common/article/article.component';
import { CommentsComponent } from './common/comments/comments.component';
import { UserService } from './service/userservice';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FileuploadComponent } from './module/fileupload/fileupload.component';
import { FileDropModule } from 'ngx-file-drop';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
//import { DispComponent } from './ngrx/disp/disp.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    AboutusComponent,
    ContactusComponent,
    ArticleComponent,
    CommentsComponent,
    FileuploadComponent,
    HeaderComponent,
    FooterComponent
   // DispComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FileDropModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
