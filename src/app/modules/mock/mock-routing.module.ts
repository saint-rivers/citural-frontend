import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectTemplateComponent } from './pages/project-template/project-template.component';

const routes: Routes = [
  {
    path: "projects",
    component: ProjectViewComponent
  },
  {
    path: "projects/template",
    component: ProjectTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockRoutingRoutingModule { }
