import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';

const routes: Routes = [
  {path: '', component: ListStudentComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'list-students', component: ListStudentComponent},
  {path: 'edit-student/:id', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
