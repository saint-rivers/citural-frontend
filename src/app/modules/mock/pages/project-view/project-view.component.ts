import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { PagedResponse } from 'src/app/shared/model/generic.response';
import { ProjectResponse } from '../../models/project-response.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  constructor(private projectService: ProjectService, private router: Router) { }

  projects: ProjectResponse[] | null = null
  pageCount: number = 0;

  ngOnInit(): void {
    this.projectService.fetch().subscribe(res => {
      this.projects = res.payload;
      this.pageCount = res.pageCount;
    });
  }


}
