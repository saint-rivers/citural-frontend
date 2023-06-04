import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent {

  projectName = new FormControl('', Validators.required)

  constructor(private projectService: ProjectService, private router: Router) { }

  create(e: SubmitEvent) {
    e.preventDefault();
    console.log(this.projectName);

    if (this.projectName.value !== null && this.projectName.value.trim() !== "") {
      this.projectService
        .createProject(this.projectName.value.trim())
        .subscribe(() => {
          this.router.navigate(['/mock/projects'])
        })
    }
  }
}
