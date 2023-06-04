import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResponse } from 'src/app/shared/model/generic.response';
import { ProjectResponse } from '../models/project-response.model';
// import { apiUrl } from 'src/environment/env';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:8080"

  createProject(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/projects`, { name })
  }

  fetch(): Observable<PagedResponse<ProjectResponse[]>> {
    return this.http.get<PagedResponse<ProjectResponse[]>>(`${this.apiUrl}/api/v1/projects`)
  }
}
