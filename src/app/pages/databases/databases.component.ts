import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContainerResponse } from 'src/app/models/container';
import { DatabaseRequest } from 'src/app/models/database';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  containerId = new FormControl("");
  containers: ContainerResponse[] = []

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.renderContainers()
  }

  private renderContainers() {
    this.databaseService.listDatabases().subscribe(res => {
      this.containers = [];
      res.forEach(d => { this.containers.push(d) })
    });
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

  start() {
    if (this.containerId.value !== null && this.containerId.value !== "") {
      this.databaseService.startDatabase(this.containerId.value).subscribe(() => {
        this.renderContainers()
      });
    }
    else {
      console.log("container ID is null");
    }
  }

  stop() {
    if (this.containerId.value !== null && this.containerId.value !== "") {
      console.log(this.containerId.value);
      this.databaseService.stopDatabase(this.containerId.value).subscribe(() => {
        this.renderContainers()
      });
    }
    else {
      console.log("container ID is null");
    }
  }
}
