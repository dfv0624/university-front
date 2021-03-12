import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-create',
  templateUrl: './departament-create.component.html',
  styleUrls: ['./departament-create.component.css']
})
export class DepartamentCreateComponent implements OnInit {

  public departament: Departament = new Departament(0, '',0, new Date());


  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public departamentservice: DepartamentService,
    public router: Router) { }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.departament);

    if(this.departament.Name.trim() === ''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.departamentservice.save(this.departament).subscribe(data => {
      this.router.navigate(['instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }

}
