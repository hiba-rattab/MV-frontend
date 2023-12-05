import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'creation', component: CreationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
