import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b-conditional-page',
  templateUrl: './b-conditional-page.component.html',
  styleUrls: ['./b-conditional-page.component.scss']
})
export class BConditionalPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('b-conditional-page.component');
  }

  ngOnInit(): void {
  }

}
