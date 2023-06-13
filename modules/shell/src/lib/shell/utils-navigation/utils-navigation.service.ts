import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import NavData from '../../config/config.nav';
import { NavItem, NavItems } from '../../interfaces/navItem.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsNavigationService {
  routes!: NavItems;

  private _currentParentRoute = new BehaviorSubject<NavItem>({} as NavItem);
  currentParentRoute$ = this._currentParentRoute.asObservable();

  private _currentChildrenRoutes = new BehaviorSubject<NavItems>([]);
  currentChildrenRoutes$ = this._currentChildrenRoutes.asObservable();

  private _currentRoute = new BehaviorSubject<string>('');
  currentRoute$ = this._currentRoute.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routes = NavData;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const parentRoute =
          this.route.root.firstChild?.snapshot.routeConfig?.path || '';
        const parentNavItem = this.getParentRoute(parentRoute);

        const childRoute = event.urlAfterRedirects.split('/')[2] || '';
        const childNavItems = this.getChildrenRoutes(parentRoute);

        const currentChild = this.getCurrentRoute(parentRoute, childRoute);

        this._currentParentRoute.next(parentNavItem);
        this._currentRoute.next(currentChild);
        this._currentChildrenRoutes.next(childNavItems);
      }
    });
  }

  getParentRoutes() {
    return this.routes;
  }

  getParentRoute(parent: string): NavItem {
    return (
      this.routes.find((route) => route.path === parent) || ({} as NavItem)
    );
  }

  getChildrenRoutes(parent: string): NavItems {
    return this.routes.find((route) => route.path === parent)?.children || [];
  }

  getCurrentRoute(parent: string, _child: string) {
    return (
      this.getChildrenRoutes(parent).find(
        (child) => child.path === `/${parent}/${_child}`
      )?.title || ''
    );
  }
}
