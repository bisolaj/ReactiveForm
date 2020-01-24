import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserFormComponent} from './views/userform/userform.component';
const routes: Routes = [
  { path: '', redirectTo: 'userform', pathMatch: 'full' },
  { path: 'userform', component: UserFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
