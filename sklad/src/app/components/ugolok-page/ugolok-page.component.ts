import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ugolok-page',
  templateUrl: './ugolok-page.component.html',
  styleUrls: ['./ugolok-page.component.scss']
})
export class UgolokPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Уголок железный и металилческий')
    this.meta.addTag({ name: 'desription', content: 'Металлический уголок 25,32,40... Железные угол для дома и стройки хорошего качества по низкой цене' })
  }

  ngOnInit(): void {
  }

}
