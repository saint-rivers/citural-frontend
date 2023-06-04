import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DbTemplatesComponent } from './pages/db-templates/db-templates.component';
import { DatabasesComponent } from './pages/databases/databases.component';
import { DatabaseRoutingModule } from './database-routing.module';



@NgModule({
  declarations: [
    DbTemplatesComponent,
    DatabasesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DatabaseRoutingModule
  ]
})
export class DatabaseModule { }
