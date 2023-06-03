import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseRequest } from 'src/app/modules/database/models/database';
import { DatabaseService } from 'src/app/modules/database/services/database/database.service';

type vendors = 'postgres' | 'mongodb';
type profiles = 'custom' | 'default' | 'random';

// type dbRequest = { containerName: string | null; defaultDatabase: string | null; username: string | null; password: string | null; port: number | null; };

@Component({
  selector: 'app-db-templates',
  templateUrl: './db-templates.component.html',
  styleUrls: ['./db-templates.component.css']
})
export class DbTemplatesComponent implements OnInit {

  availableVendors = ['postgres', 'mongodb']
  selectedVendor: 'postgres' | 'mongodb' = "postgres";
  // private customProfile: Partial<dbRequest> = {};

  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    private router: Router
  ) { }

  container = this.formBuilder.group({
    containerName: new FormControl(''),
    defaultDatabase: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    port: new FormControl(3000),
  })


  ngOnInit() {
    // this.container.valueChanges.subscribe(val => {
    //   this.customProfile = val
    // })
  }

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
    // console.log(this.container.hasError);
    // if (!this.container.hasError) {

    this.databaseService.createDatabase(request).subscribe(() => {
      this.router.navigate(["/databases"])
    });
    // }
  }

  setProfile(profile: profiles) {
    switch (profile) {
      case "default": {
        this.container.setValue({
          containerName: '',
          defaultDatabase: 'postgres',
          username: 'postgres',
          password: 'postgres',
          port: 3000
        })
        break;
      }
      case "random": {
        this.container.setValue({
          containerName: 'todo: random generate',
          defaultDatabase: 'todo: random generate',
          username: 'todo: random generate',
          password: 'todo: random generate',
          port: 3000
        })
        break;
      }
      // case "custom": {
      //   this.container.setValue({
      //     containerName: this.customProfile.containerName!,
      //     defaultDatabase: this.customProfile.defaultDatabase!,
      //     username: this.customProfile.username!,
      //     password: this.customProfile.password!,
      //     port: this.customProfile.port!,
      //   })
      //   break;
      // }
    }
  }
  clearProfile() {
    this.container.setValue({
      containerName: '',
      defaultDatabase: '',
      username: '',
      password: '',
      port: 3000
    })
  }
}
