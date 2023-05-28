import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
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

