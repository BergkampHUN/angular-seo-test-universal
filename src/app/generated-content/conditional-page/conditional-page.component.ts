import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-conditional-page',
  templateUrl: './conditional-page.component.html',
  styleUrls: ['./conditional-page.component.scss']
})
export class ConditionalPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('conditional-page.component');
  }

  ngOnInit(): void {
  }

}
