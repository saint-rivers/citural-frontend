import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

type sidebarStatus = { isSidebarMinimized: boolean }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citural-frontend';

  // isMinimized: Observable<sidebarStatus> = this.store.select('sidebarStatus')
  isMinimized = false;

  constructor(private store: Store<{ sidebarStatus: sidebarStatus }>) {
    this.store.select('sidebarStatus').subscribe(res => {
      this.isMinimized = res.isSidebarMinimized
    })
  }



}
