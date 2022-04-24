import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Профильная труба,прямоугольная и квадратная')
    this.meta.addTag({ name: 'desription', content: 'Профиль по всем размерам (20,25,30,40) по самым низким ценам в Молодечно' })
  }

  ngOnInit(): void {
  }

}
