import { Component } from '@angular/core';

import { cilStorage, cilLan } from '@coreui/icons';
import { Store } from '@ngrx/store';
import { setNavbar } from '../../reducer/navbar/navbar.action';
import { Observable } from 'rxjs';
import { NavbarLink } from '../../models/navbar-link.model';
import { moduleName } from '@core/constants/module-name.model';
import { setIsMinimized } from '@core/reducer/slice/sidebar.action';

import dataLinks from "../../data/preset-links.json"


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

  constructor(private store: Store<{ links: NavbarLink[], sidebarStatus: { isSidebarMinimized: boolean } }>) {
    const active = localStorage.getItem('activeModule') as moduleName
    if (active != null) {
      this.activeModule = active
    }
  }

  ngOnInit(): void {
    this.navbarLinks = this.store.select('links')
    this.store.select('sidebarStatus').subscribe(res => {
      this.isSidebarMinimized = res.isSidebarMinimized
    })
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
      links: dataLinks.mockLinks
    }))
  }

  dispatchTinkerNavbar() {
    this.store.dispatch(setNavbar({
      links: dataLinks.containerLinks
    }))
  }

  isSidebarMinimized: boolean = false;
  toggleSidebarMinimized() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
    this.store.dispatch(setIsMinimized({ isMinimized: this.isSidebarMinimized }))
  }
}
