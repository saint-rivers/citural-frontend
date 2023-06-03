import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconModule } from '@coreui/icons-angular';
import { AuthModule } from "../modules/auth/auth.module";
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    AuthModule,
    CoreRoutingModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
