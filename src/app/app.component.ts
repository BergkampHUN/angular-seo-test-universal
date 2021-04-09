import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-seo-test';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  goToPages(pagelink: string): void {
    this.router.navigate([`/${pagelink}`], { relativeTo: this.route });
  }
}
