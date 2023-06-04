import { Component } from '@angular/core';

import { cilStorage, cilLan } from '@coreui/icons';
import { Store } from '@ngrx/store';
import { setNavbar } from '../../models/action/navbar.action';
import { Observable } from 'rxjs';
import { NavbarLink } from '../../models/navbar-link.model';
import { moduleName } from '@core/constants/module-name.model';
// import { rubberBandAnimation, collapseAnimation } from 'angular-animations';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: []
})
export class SidebarComponent {
  icons = { cilLan, cilStorage };
  navbarLinks: Observable<NavbarLink[]> = new Observable()
  activeModule: moduleName | '' = "";

  constructor(private store: Store<{ links: NavbarLink[] }>) {
    const active = localStorage.getItem('activeModule') as moduleName
    if (active != null) {
      this.activeModule = active
    }
  }

  ngOnInit(): void {
    this.navbarLinks = this.store.select('links')
  }

  selectModule(module: moduleName) {
    this.activeModule = module;
    localStorage.setItem('activeModule', module);

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
