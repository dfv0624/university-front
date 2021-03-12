import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Student} from '../domain/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

public url: string = '';

  constructor(public HttpClient :HttpClient) {
   // this.url = './assets/MOCK_DATA_STUDENTS.json';
    this.url= 'http://university-api.azurewebsites.net/api/Students/'
   }
   public getAll():Observable<any>{
     return this.HttpClient.get(this.url + 'GetStudents/');
   }
   public getById(id: number):Observable<any>{
    
    return this.HttpClient.get(this.url+'GetStudent/'+id);
  }
  public save(student : Student):Observable<any>{
    return this.HttpClient.post(this.url,student);
  }
  public edit(student : Student):Observable<any>{
    return this.HttpClient.put(this.url+student.ID,student);
  }
  public delete(id: number):Observable<any>{
    return this.HttpClient.delete(this.url + id)
  }
   }
  

