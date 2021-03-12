import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit,OnDestroy {
  
 
public Instructors : Instructor [] = [];
public subinstructor : Subscription =new Subscription;

  constructor(public InstructorService: InstructorService) { }

  ngOnDestroy():void{
    this.subinstructor.unsubscribe();
    }

  ngOnInit() {
  this.getAll();
  }

getAll():void {
  
this.subinstructor= this.InstructorService.getAll().subscribe(data=>{
  this.Instructors=data;
})
}
}
