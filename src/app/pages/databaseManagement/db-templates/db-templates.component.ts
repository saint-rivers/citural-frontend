import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseRequest } from 'src/app/models/database';
import { DatabaseService } from 'src/app/services/database/database.service';

type vendors = 'postgres' | 'mongodb'

@Component({
  selector: 'app-db-templates',
  templateUrl: './db-templates.component.html',
  styleUrls: ['./db-templates.component.css']
})
export class DbTemplatesComponent {

  availableVendors = ['postgres', 'mongodb']
  selectedVendor: 'postgres' | 'mongodb' = "postgres";

  constructor(private formBuilder: FormBuilder, private databaseService: DatabaseService, private router: Router) { }

  container = this.formBuilder.group({
    containerName: new FormControl(''),
    defaultDatabase: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    port: new FormControl(3000),
  })

  selectVendor(selected: vendors) {
    this.selectedVendor = selected
  }

  create() {
    const request: DatabaseRequest = {
      containerName: this.container.value.containerName!,
      vendor: this.selectedVendor,
      defaultDatabase: this.container.value.defaultDatabase!,
      username: this.container.value.username!,
      password: this.container.value.password!,
      port: this.container.value.port!,
    }
    this.databaseService.createDatabase(request).subscribe(() => {

    });
    this.router.navigate(["/database"])
  }
}
