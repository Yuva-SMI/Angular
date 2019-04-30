import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { studentComponent } from './table/student.component';

const routes: Routes =
  [
    {
      path: 'table',
      component: studentComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
