import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { containerReducer } from '@app-modules/database/models/actions/container.reducer';
import { initializeKeycloak } from './config/keycloak';
import { AuthModule } from '@app-modules/auth/auth.module';
import { DatabaseModule } from '@app-modules/database/database.module';
import { CoreModule } from '@core/core.module';
import { navbarReducer } from './core/reducer/navbar.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    KeycloakAngularModule, ReactiveFormsModule, StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ containers: containerReducer, links: navbarReducer }),
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
