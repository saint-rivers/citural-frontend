import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { setContainers } from 'src/app/models/actions/container.actions';
import { ContainerResponse } from 'src/app/models/container';
import { DatabaseRequest } from 'src/app/models/database';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent {

  containerId = new FormControl("");
  containers$: Observable<ContainerResponse[]> = this.store.select('containers')

  constructor(
    private databaseService: DatabaseService,
    private store: Store<{ containers: ContainerResponse[] }>
  ) {
    this.databaseService.listDatabases().subscribe((res) => {
      this.store.dispatch(setContainers({ containers: res }))
    })
  }

  create() {
    const request: DatabaseRequest = {
      containerName: "testing1",
      vendor: "postgres",
      defaultDatabase: "tester",
      username: "postgres",
      password: "password",
      port: 9494,
    }
    this.databaseService.createDatabase(request).subscribe();
  }

  start(id: string) {
    if (id !== null && id !== "") {
      this.databaseService.startDatabase(id).subscribe(() => {
        this.refetchContainers()
      })
    }
    else {
      console.log("container ID is null");
    }
  }

  stop(id: string) {
    if (id !== null && id !== "") {
      this.databaseService.stopDatabase(id).subscribe(() => {
        this.refetchContainers()
      })
    }
    else {
      console.log("container ID is null");
    }
  }

  private refetchContainers() {
    this.databaseService.listDatabases().subscribe((res) => {
      this.store.dispatch(setContainers({ containers: res }))
    })
  }

}
