import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-r-hardcoded-page',
  templateUrl: './r-hardcoded-page.component.html',
  styleUrls: ['./r-hardcoded-page.component.scss']
})
export class RHardcodedPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('r-hardcoded-page.component');
  }

  ngOnInit(): void {
  }

}
