import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Трубы профильные 20x20x1.5, 20x20x2.0, 25x25x2.0, металлическая Арматура, Уголок Конструкции, купить в Молодечно')
    this.meta.addTag({ name: 'desription', content: 'Труба водогазопроводная и электросварная, арматура, уголок, квадрат металлический, круг металлический, труба профильная 15x15-100x100. Металлопрокат в Молодечно.' })
  }

  ngOnInit(): void {
  }

}
