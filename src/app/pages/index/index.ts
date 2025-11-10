import { Component, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [
    AsyncPipe
  ],
  templateUrl: './index.html',
  styles: ``,
})
export class Index {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
}
