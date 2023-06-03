import { Component, OnInit } from '@angular/core';
import { setNavbar } from './core/models/action/navbar.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavbarLink } from './core/models/navbar-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'citural-frontend';
  navbarLinks: Observable<NavbarLink[]> | null = null

  constructor(private store: Store<{ links: NavbarLink[] }>) { }

  ngOnInit(): void {
    this.loadNavbar()
    this.navbarLinks = this.store.select('links')
  }

  loadNavbar() {
    this.store.dispatch(setNavbar({
      links: [
        {
          path: '/containers/databases/listing',
          name: 'Databases'
        },
        {
          path: '/containers/api/listing',
          name: 'API'
        },
      ]
    }))
  }
}
