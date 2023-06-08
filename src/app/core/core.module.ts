import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconModule } from '@coreui/icons-angular';
import { AuthModule } from "@modules/auth/auth.module";
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { IonIcon, IonicModule } from '@ionic/angular';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    NotFoundComponent,
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    AuthModule,
    CoreRoutingModule,
    // AppRoutingModule,
    IonicModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    ToggleSwitchComponent
  ]
})
export class CoreModule { }
