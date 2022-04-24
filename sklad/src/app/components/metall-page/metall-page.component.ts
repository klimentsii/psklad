import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-metall-page',
  templateUrl: './metall-page.component.html',
  styleUrls: ['./metall-page.component.scss']
})
export class MetallPageComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Металлические лист, полосы и круглые трубы')
    this.meta.addTag({ name: 'desription', content: 'Металлические полосы, листы и круглые трубы, а также остальной металл вы можете приобрести в Складе' })
  }

  ngOnInit(): void {
  }

}
