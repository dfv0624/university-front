import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Instructor} from '../domain/instructor';
@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  
  public url: string = '';

  constructor(public HttpClient :HttpClient) {
    // this.url = './assets/MOCK_DATA_STUDENTS.json';
     this.url= 'https://university-api.azurewebsites.net/api/Instructors/'
    }
    public getAll():Observable<any>{
      return this.HttpClient.get(this.url + 'GetInstructors/');
    }
    public getById(id: number):Observable<any>{
     
     return this.HttpClient.get(this.url+'GetInstructor/'+id);
   }
   public save(Instructor : Instructor):Observable<any>{
     return this.HttpClient.post(this.url,Instructor);
   }
   public edit(Instructor : Instructor):Observable<any>{
     return this.HttpClient.put(this.url+Instructor.ID,Instructor);
   }
   public delete(id: number):Observable<any>{
     return this.HttpClient.delete(this.url + id)
   }
}
