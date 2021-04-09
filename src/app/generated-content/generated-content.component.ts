import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-generated-content',
  templateUrl: './generated-content.component.html',
  styleUrls: ['./generated-content.component.scss']
})
export class GeneratedContentComponent implements OnInit {
  public showContent = true;
  public serverContent$: Observable<{ title: string, desc: string }>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.serverContent$ = of({
      title: 'Observable title',
      desc: 'Description of the observable content',
    }).pipe(
      delay(1000),
    );
  }

  ngOnInit(): void {
  }

  goToPages(pagelink: string): void {
    this.router.navigate([`/${pagelink}`], { relativeTo: this.route });
  }

}
