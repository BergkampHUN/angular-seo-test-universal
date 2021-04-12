import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('sub-page.component');
  }

  ngOnInit(): void {
  }

}
