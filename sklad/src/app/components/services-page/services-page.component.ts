import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Трубы Арматура Уголок в Молодечно')
    this.meta.addTag({ name: 'desription', content: 'Заходите на сайт Склад Металла в Молодечно за любым металлом (трубы, уголок арматура, металлоконструкции)' })
  }

  ngOnInit(): void {
  }

}
