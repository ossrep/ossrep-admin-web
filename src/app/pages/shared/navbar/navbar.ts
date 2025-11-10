import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, NgbCollapse, RouterLink ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  appTitle = environment.app.title;
  isCollapsed: boolean = false;
  private readonly oidcSecurityService = inject(OidcSecurityService);

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens()
      .subscribe((result) => console.log(result));
  }
}
