import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {

  public id: number = 0;
  public Instructor: Instructor = new Instructor(0, '', '', new Date(), '');

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public InstructorService: InstructorService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.InstructorService.getById(this.id).subscribe(data => {
      this.Instructor = data;
    });
  }

  public edit() {
    console.log(this.Instructor);

    if(this.Instructor.LastName.trim() === ''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.InstructorService.edit(this.Instructor).subscribe(data => {
      this.router.navigate(['instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
