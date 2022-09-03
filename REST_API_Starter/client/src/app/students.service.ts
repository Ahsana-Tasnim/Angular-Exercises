import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  student: Array<Students>;

  constructor(private http: HttpClient) { }

  /**
   * Creating a new student
   * @param student 
   * @returns 
   */
  public addStudent(student: Students): Observable<Students>{
    return this.http.post<Students>('http://localhost:8080/endpoint/add-student', student);
  }

  /**
   * Get all the students
   */
  public getStudents(): Observable<Students[]>{
    return this.http.get<Students[]>('http://localhost:8080/endpoint');
  }
 
   }


