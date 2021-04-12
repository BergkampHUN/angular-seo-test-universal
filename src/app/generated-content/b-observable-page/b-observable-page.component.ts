import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b-observable-page',
  templateUrl: './b-observable-page.component.html',
  styleUrls: ['./b-observable-page.component.scss']
})
export class BObservablePageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('b-observable-page.component');
  }

  ngOnInit(): void {
  }

}
