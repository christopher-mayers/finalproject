import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DiscussionComponent } from './discussion/discussion.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    HelpComponent,
    LoginComponent,
    ResultsComponent,
    TagsComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }