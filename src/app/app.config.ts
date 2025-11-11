import {
  ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OidcSecurityService, provideAuth, StsConfigLoader } from 'angular-auth-oidc-client';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { httpLoaderFactory } from './auth/auth.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth({
      loader: {
        provide: StsConfigLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    provideAppInitializer(() => {
      const oidcSecurityService = inject(OidcSecurityService);
      return oidcSecurityService.checkAuth();
    })
  ]
};
