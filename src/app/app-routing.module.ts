import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { DepartamentCreateComponent } from './component/departament-create/departament-create.component';
import { DepartamentDeleteComponent } from './component/departament-delete/departament-delete.component';
import { DepartamentEditComponent } from './component/departament-edit/departament-edit.component';
import { DepartamentListComponent } from './component/departament-list/departament-list.component';
import { InstructorCreateComponent } from './component/instructor-create/instructor-create.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorDetailComponent } from './component/instructor-detail/instructor-detail.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { StudentCoursesListComponent } from './component/student-courses-list/student-courses-list.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';


const routes: Routes = [

{path: 'student-list',component: StudentListComponent},
{path: 'student-detail/:id',component: StudentDetailComponent},
{ path: 'student-create', component: StudentCreateComponent },
{ path: 'student-edit/:id', component: StudentEditComponent },
{ path: 'student-delete/:id', component: StudentDeleteComponent },
{ path: 'student-courses-list/:id', component: StudentCoursesListComponent },

{path: 'instructor-list',component:InstructorListComponent},
{path : 'instructor-detail/:id',component:InstructorDetailComponent},
{path: 'instructor-create',component:InstructorCreateComponent},
{path: 'instructor-edit/:id',component: InstructorEditComponent},
{path: 'instructor-delete/:id',component:InstructorDeleteComponent},

{path: 'course-list',component:CourseListComponent},
{path: 'course-create',component:CourseCreateComponent},
{path: 'course-edit/:id',component:CourseEditComponent},
{path: 'course-delete/:id',component:CourseDeleteComponent},

{path: 'departament-list',component:DepartamentListComponent},
{path : 'departament-create',component:DepartamentCreateComponent},
{path: 'departament-edit/:id',component : DepartamentEditComponent},
{path: 'departament-delete/:id',component:DepartamentDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
