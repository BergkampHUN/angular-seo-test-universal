import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hardcoded-page',
  templateUrl: './hardcoded-page.component.html',
  styleUrls: ['./hardcoded-page.component.scss']
})
export class HardcodedPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('hardcoded-page.component');
  }

  ngOnInit(): void {
  }

}
