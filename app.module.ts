import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComp } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CorsesServ } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavorComponent } from './favor/favor.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { FormatInputDirective } from './format-input.directive';
import { FastComponent } from './fast/fast.component';
import { FormekComponent } from './formek/formek.component';
import { ThingFormComponent } from './thing-form/thing-form.component';
import { ArrayCourseComponent } from './array-course/array-course.component';
import { PasswordyComponent } from './passwordy/passwordy.component';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { PostService } from './servic/post.service';
import { FollwersComponent } from './follwers/follwers.component';
import { FollwersService } from './follwers.service';
import { FollowersyComponent } from './followersy/followersy.component';
import { FollowersyProfileComponent } from './followersy-profile/followersy-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComp,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavorComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    FormatInputDirective,
    FastComponent,
    FormekComponent,
    ThingFormComponent,
    SignupFormComponent,
    ArrayCourseComponent,
    PasswordyComponent,
    HttpCompComponent,
    FollwersComponent,
    FollowersyComponent,
    FollowersyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    CorsesServ,
    AuthorsService,
    FollwersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
