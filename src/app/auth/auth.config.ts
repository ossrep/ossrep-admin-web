import { StsConfigHttpLoader } from 'angular-auth-oidc-client';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const httpLoaderFactory = (httpClient: HttpClient) => {
  const config$ = httpClient.get<any>('/config.json').pipe(
    map((customConfig: any) => {
      return {
        authority: customConfig.oidcUrl,
        clientId: customConfig.oidcClientId,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        scope: 'openid profile offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
      };
    })
  );

  return new StsConfigHttpLoader(config$);
};
