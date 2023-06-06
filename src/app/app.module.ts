import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { containerReducer } from '@modules/database/models/actions/container.reducer';
import { initializeKeycloak } from './config/keycloak';
import { AuthModule } from '@modules/auth/auth.module';
import { DatabaseModule } from '@modules/database/database.module';
import { CoreModule } from '@core/core.module';
import { navbarReducer } from './core/reducer/navbar/navbar.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { sidebarReducer } from '@core/reducer/slice/sidebar.reducer';
// import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DatabaseModule,
    CoreModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ containers: containerReducer, links: navbarReducer, sidebarStatus: sidebarReducer }),
    IonicModule.forRoot(),
    // IonicModule.forRoot(),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
