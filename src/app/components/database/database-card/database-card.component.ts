import { Component, Input } from '@angular/core';
import { ContainerResponse } from 'src/app/models/container';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Store } from '@ngrx/store';
import { setContainers } from 'src/app/models/actions/container.actions';

@Component({
  selector: 'app-database-card',
  templateUrl: './database-card.component.html',
  styleUrls: ['./database-card.component.css']
})
export class DatabaseCardComponent {

  @Input() database: ContainerResponse | null = null;

  constructor(private databaseService: DatabaseService, private store: Store<{ containers: any[] }>) {
  }

  start() {
    if (this.database != null) {
      const id = this.database.containerId;
      if (id !== null && id !== "") {
        this.databaseService.startDatabase(id).subscribe(() => {
          this.refetchContainers()
        })
      }
    }
    else {
      console.log("container ID is null");
    }
  }

  stop() {
    if (this.database != null) {
      const id = this.database.containerId;
      if (id !== null && id !== "") {
        this.databaseService.stopDatabase(id).subscribe(() => {
          this.refetchContainers()
        })
      }
    }
    else {
      console.log("container ID is null");
    }
  }

  refetchContainers() {
    this.databaseService.listDatabases().subscribe((res) => {
      this.store.dispatch(setContainers({ containers: res }))
    })
  }

}
