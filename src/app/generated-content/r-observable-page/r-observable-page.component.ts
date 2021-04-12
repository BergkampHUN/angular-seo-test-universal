import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-r-observable-page',
  templateUrl: './r-observable-page.component.html',
  styleUrls: ['./r-observable-page.component.scss']
})
export class RObservablePageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('r-observable-page.component');
  }

  ngOnInit(): void {
  }

}
