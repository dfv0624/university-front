import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departament } from '../domain/departament';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  public url: string = '';

  constructor(public HttpClient :HttpClient) {
    // this.url = './assets/MOCK_DATA_STUDENTS.json';
     this.url= 'http://university-api.azurewebsites.net/api/Departments/'
    }
    public getAll():Observable<any>{
      return this.HttpClient.get(this.url);
    }
    public getById(id: number):Observable<any>{
     
     return this.HttpClient.get(this.url+id);
   }
   public save(departament : Departament):Observable<any>{
     return this.HttpClient.post(this.url,departament);
   }
   public edit(departament : Departament):Observable<any>{
     return this.HttpClient.put(this.url+departament.DepartmentID,departament);
   }
   public delete(id: number):Observable<any>{
     return this.HttpClient.delete(this.url + id)
   }
    }

