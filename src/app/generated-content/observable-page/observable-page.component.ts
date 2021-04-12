import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-observable-page',
  templateUrl: './observable-page.component.html',
  styleUrls: ['./observable-page.component.scss']
})
export class ObservablePageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('observable-page.component');
  }

  ngOnInit(): void {
  }

}
