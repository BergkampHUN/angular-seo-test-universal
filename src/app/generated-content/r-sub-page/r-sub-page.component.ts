import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-r-sub-page',
  templateUrl: './r-sub-page.component.html',
  styleUrls: ['./r-sub-page.component.scss']
})
export class RSubPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('r-sub-page.component');
  }

  ngOnInit(): void {
  }

}
