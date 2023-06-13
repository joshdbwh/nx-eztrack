import { routes } from './shell.routes';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlatformBarComponent } from '../ui-platform-bar/platform-bar.component'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { NavItem, NavItems } from './core/interfaces/navItem.interface';
import { IconComponent } from './shared/components/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UtilsNavigationService } from '../utils-navigation/utils-navigation.service';

@Component({
  selector: 'ez-feature-main',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    RouterOutlet,
    IconComponent,
    PlatformBarComponent,
    NavListComponent,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './feature-main.component.html',
  styleUrls: ['./feature-main.component.scss'],
})
export class FeatureMainComponent implements OnInit {
  title = 'ng-eztrack';
  routes?: NavItems | undefined;
  currentParentRoute$: Observable<NavItem> =
    this.navService.currentParentRoute$;
  childrenRoutes$: Observable<NavItems> =
    this.navService.currentChildrenRoutes$;

  currentChildRoute$: Observable<string> = this.navService.currentRoute$;

  constructor(private navService: UtilsNavigationService) {}

  ngOnInit() {
    this.routes = this.navService.getParentRoutes();
  }
}
