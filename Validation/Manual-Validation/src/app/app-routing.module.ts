import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooListComponent } from './foo-list/foo-list.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  {path: '', redirectTo: '/foos', pathMatch: 'full'},
  {path: 'foos', component: FooListComponent},
  {path: 'foo/create', component: FooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
