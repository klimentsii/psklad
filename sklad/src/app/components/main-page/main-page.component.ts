import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Склад Металла, купить ТРУБЫ профильные 20x20x1.5, 20x20x2.0, 25x25x2.0, АРМАТУРУ, УГОЛОК в Молодечно')
    this.meta.addTag({ name: 'desription', content: 'Металлические трубы, уголок, арматура и металлоконструкции высокого качества купить в Молодечно. Металлопрокат, профильные трубы в Молодечно' })
  }

  ngOnInit(): void {
  }

}
