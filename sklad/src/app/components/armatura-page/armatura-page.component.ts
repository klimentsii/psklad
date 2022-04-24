import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-armatura-page',
  templateUrl: './armatura-page.component.html',
  styleUrls: ['./armatura-page.component.scss']
})
export class ArmaturaPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Арматура 8,10,12 в Складе Металла')
    this.meta.addTag({ name: 'desription', content: 'Арматура размером 8,10,12 и тд по приличным ценам и из качественного материала' })
  }

  ngOnInit(): void {
  }

}
