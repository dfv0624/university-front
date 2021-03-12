import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit,OnDestroy {
  
 
  public Courses : Course [] = [];
  public subcourse : Subscription =new Subscription;
  
    constructor(public CourseService: CourseService) { }
  
    ngOnDestroy():void{
      this.subcourse.unsubscribe();
      }
  
    ngOnInit() {
    this.getAll();
    }
  
  getAll():void {
    
  this.subcourse= this.CourseService.getAll().subscribe(data=>{
    this.Courses=data;
  })
  }
  }
