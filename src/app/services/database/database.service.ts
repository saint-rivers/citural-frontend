import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DatabaseRequest } from 'src/app/models/database';
import { apiUrl } from 'src/environment/env';
import { Observable } from 'rxjs';
import { ContainerResponse } from 'src/app/models/container';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  createDatabase(database: DatabaseRequest) {
    return this.http.post(`${apiUrl}/api/v1/services`, database)
  }

  listDatabases(): Observable<ContainerResponse[]> {
    return this.http.get<ContainerResponse[]>(`${apiUrl}/api/v1/services`)
  }

  stopDatabase(containerId: string) {
    return this.http.put(`${apiUrl}/api/v1/services?status=down&container=${containerId}`, {});
  }

  startDatabase(containerId: string) {
    console.log(containerId);
    
    return this.http.put(`${apiUrl}/api/v1/services?status=up&container=${containerId}`, {});
  }
}
