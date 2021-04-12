import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-r-conditional-page',
  templateUrl: './r-conditional-page.component.html',
  styleUrls: ['./r-conditional-page.component.scss']
})
export class RConditionalPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('r-conditional-page.component');
  }

  ngOnInit(): void {
  }

}
