import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Students } from '../models/students';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  student: Students = new Students();

  addStudent = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

   constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.addStudent.value);
    this.student = this.addStudent.value;

    this.studentService.addStudent(this.student).subscribe((data: Students)=>{
      console.log(Students);
      this.router.navigate(['/list-students']);
    });
  }

}
