import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-delete',
  templateUrl: './departament-delete.component.html',
  styleUrls: ['./departament-delete.component.css']
})
export class DepartamentDeleteComponent implements OnInit {

  public id: number | undefined;
  public departament: Departament = new Departament(0, '',0, new Date());

  public showMsg: boolean = false;
  public msg: string | undefined;
  public type: string | undefined;

  constructor(public departamentService: DepartamentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);    
  
    this.departamentService.getById(this.id).subscribe(data => {
      this.departament = data;
    });
  }

  public delete() {
    console.log(this.departament);
    
    this.departamentService.delete(this.departament.DepartmentID).subscribe(data => {
      this.router.navigate(['departament-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
