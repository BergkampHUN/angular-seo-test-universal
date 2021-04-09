import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.serverContent$ = of({
      title: 'Observable title',
      desc: 'Description of the observable content',
    }).pipe(
      delay(1000),
    );
  }

  ngOnInit(): void {
  }

}
