import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentsComponent } from './pages/home-students/home-students.component';

const routes: Routes = [
  {
    path: '',
    component: HomeStudentsComponent
  },
  {
    path: 'inicio',
    component: HomeStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
