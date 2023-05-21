import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { DatabasesComponent } from './pages/databases/databases.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './components/auth/login-button/login-button.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { DatabaseCardComponent } from './components/database/database-card/database-card.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8800',
        realm: 'citural',
        clientId: 'citural-frontend',
      },
      initOptions: {
        onLoad: 'check-sso',
        // redirectUri: 'https://youtube.com',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      shouldAddToken: (request) => {
        const { method, url } = request;
        return url.includes('/api/v1/services');// && method.toUpperCase() === 'GET';
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatabasesComponent,
    LoginButtonComponent,
    DatabaseCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule, ReactiveFormsModule
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
