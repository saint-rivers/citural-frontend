import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbTemplatesComponent } from './pages/databaseManagement/db-templates/db-templates.component';
import { DatabasesComponent } from './pages/databases/databases.component';

export const routes: Routes = [
  {
    path: "databases",
    title: 'Databases',
    component: DatabasesComponent,
  },
  {
    path: "databases/template",
    title: 'Databases',
    component: DbTemplatesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
