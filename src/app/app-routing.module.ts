import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasesComponent } from './pages/databases/databases.component';
import { KeycloakService } from 'keycloak-angular';

const routes: Routes = [
  {
    path: "databases",
    component: DatabasesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
