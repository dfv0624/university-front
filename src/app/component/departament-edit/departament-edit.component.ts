import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-edit',
  templateUrl: './departament-edit.component.html',
  styleUrls: ['./departament-edit.component.css']
})
export class DepartamentEditComponent implements OnInit {

  public id: number = 0;
  public Departament: Departament = new Departament(0, '',0, new Date());

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public activatedRoute: ActivatedRoute,
    public DepartamentService: DepartamentService,
    public router: Router) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.DepartamentService.getById(this.id).subscribe(data => {
      this.Departament = data;
    });
  }

  public edit() {
    console.log(this.Departament);

    if(this.Departament.Name.trim() === ''){
      this.showMsg = true;
      this.msg = 'The field LastName is required';
      this.type = 'warning';
      return;
    }

    this.DepartamentService.edit(this.Departament).subscribe(data => {
      this.router.navigate(['instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
