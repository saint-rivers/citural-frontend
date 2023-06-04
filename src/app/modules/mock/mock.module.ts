import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockRoutingRoutingModule } from './mock-routing.module';
import { ProjectTemplateComponent } from './pages/project-template/project-template.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectTemplateComponent,
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    MockRoutingRoutingModule,
    ReactiveFormsModule
  ]
})
export class MockModule { }
