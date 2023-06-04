import { Component } from '@angular/core';

import { cilStorage, cilLan } from '@coreui/icons';
import { Store } from '@ngrx/store';
import { setNavbar } from '../../models/action/navbar.action';
import { Observable } from 'rxjs';
import { NavbarLink } from '../../models/navbar-link.model';
// import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { rubberBandAnimation, collapseAnimation } from 'angular-animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    rubberBandAnimation(),
    collapseAnimation(),
  ]
})
export class SidebarComponent {
  icons = { cilLan, cilStorage };
  navbarLinks: Observable<NavbarLink[]> = new Observable()
  constructor(private store: Store<{ links: NavbarLink[] }>) { }

  ngOnInit(): void {
    this.loadNavbar('tinker')
    this.navbarLinks = this.store.select('links')
  }

  loadNavbar(module: 'tinker' | 'mock') {
    switch (module) {
      case 'mock': {
        this.dispatchMockNavbar()
        break;
      }
      case 'tinker': {
        this.dispatchTinkerNavbar();
        break;
      }
    }
  }

  dispatchMockNavbar() {
    this.store.dispatch(setNavbar({
      links: [
        {
          path: '/mock/projects',
          name: 'Projects'
        }
      ]
    }))
  }

  dispatchTinkerNavbar() {
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
