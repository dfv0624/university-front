import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentDetailComponent } from './component/student-detail/student-detail.component'
import { FormsModule } from '@angular/forms'
import { StudentService } from './service/student.service';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { InstructorService } from './service/instructor.service';
import { CourseService } from './service/course.service';
import { DepartamentListComponent } from './component/departament-list/departament-list.component';
import { DepartamentCreateComponent } from './component/departament-create/departament-create.component';
import { DepartamentEditComponent } from './component/departament-edit/departament-edit.component';
import { DepartamentDeleteComponent } from './component/departament-delete/departament-delete.component';
import { DepartamentService } from './service/departament.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentCoursesListComponent,
    InstructorListComponent,
    InstructorCreateComponent,
    InstructorDeleteComponent,
    InstructorDetailComponent,
    InstructorEditComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    CourseListComponent,
    DepartamentListComponent,
    DepartamentCreateComponent,
    DepartamentEditComponent,
    DepartamentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    InstructorService,
    CourseService,
    DepartamentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
