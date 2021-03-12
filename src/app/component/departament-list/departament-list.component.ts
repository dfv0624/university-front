import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.css']
})
export class DepartamentListComponent implements OnInit ,OnDestroy {

  public Departaments : Departament [] = [];
  public subDepartaments : Subscription =new Subscription;
  
    constructor(public departamentService: DepartamentService) { }
  
    ngOnDestroy():void{
      this.subDepartaments.unsubscribe();
      }
  
    ngOnInit() {
    this.getAll();
    }
  
  getAll():void {
  this.subDepartaments= this.departamentService.getAll().subscribe(data=>{
    this.Departaments=data;
  })
  }
}
