import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavbarLink } from '../../models/navbar-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<{ links: NavbarLink[] }>) { }

  links$: Observable<any> = this.store.select('links')

  ngOnInit(): void {
    // this.links$ = this.store.select('links')
    // console.log(this.links$);
  }

}
