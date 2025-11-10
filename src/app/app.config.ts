import {
  APP_INITIALIZER,
  ApplicationConfig, inject, provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authConfig } from './auth/auth.config';
import { OidcSecurityService, provideAuth } from 'angular-auth-oidc-client';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth(authConfig),
    provideHttpClient(),
    provideAppInitializer(() => {
      const oidcSecurityService = inject(OidcSecurityService);
      // Return the Observable directly, not a function
      return oidcSecurityService.checkAuth();
    })
  ]
};
