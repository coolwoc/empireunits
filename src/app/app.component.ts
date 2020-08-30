import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentNavigation = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        /** Toogle back-img, according with URL */
        event.urlAfterRedirects === '/home'
          ? (this.currentNavigation = true)
          : (this.currentNavigation = false);
      }
    });
  }
}
