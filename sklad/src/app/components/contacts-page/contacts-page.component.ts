import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Металл в Молодечно. Минская область')
    this.meta.addTag({ name: 'desription', content: 'В Молодечно 44 размеров труб, 7 размеров круга, 6 размеров арматуры, 10 размеров уголка' })
  }

  ngOnInit(): void {
  }

}
