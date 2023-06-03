import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatabasesComponent } from './pages/databases/databases.component';
import { DbTemplatesComponent } from './pages/db-templates/db-templates.component';

export const routes: Routes = [
  {
    path: "databases/listing",
    title: 'Databases',
    component: DatabasesComponent,
  },
  {
    path: "databases/template",
    title: 'Databases',
    component: DbTemplatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
