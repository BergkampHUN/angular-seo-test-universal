import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b-hardcoded-page',
  templateUrl: './b-hardcoded-page.component.html',
  styleUrls: ['./b-hardcoded-page.component.scss']
})
export class BHardcodedPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('b-hardcoded-page.component');
  }

  ngOnInit(): void {
  }

}
