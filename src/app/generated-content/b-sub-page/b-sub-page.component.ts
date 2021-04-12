import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b-sub-page',
  templateUrl: './b-sub-page.component.html',
  styleUrls: ['./b-sub-page.component.scss']
})
export class BSubPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('b-sub-page.component');
  }

  ngOnInit(): void {
  }

}
