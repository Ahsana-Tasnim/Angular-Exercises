import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  student: Array<Students>;
  message: string;
  
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
   this.getStudenst();
  }

  getStudenst(){
    this.studentService.getStudents().subscribe(students =>{
      this.student = students;
    }, err =>{
      this.message = err;
    }).add(()=>{

    });
  }
  
}
