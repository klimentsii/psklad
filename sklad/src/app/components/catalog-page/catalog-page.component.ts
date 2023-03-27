import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as XLSX from 'xlsx';

// export interface IExcel {
//   profil: object;
//   list: object;
//   truba: object;
//   kvadrat: object;
//   krug: object;
//   ugolok: object;
//   armatura: object;
//   zaglushki: object;
//   polosa: Array<Array<string>>;
// }

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent {

  date: Date = new Date()

  public db: Array<Array<Array<string>>> = [];

  public profil: Array<Array<Array<string>>> = [[[], []], [[], []], [[], []]];

  public zaglushki: Array<Array<Array<string>>> = [[[], []], [[], []]];

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Трубы профильные 20x20x1.5, 20x20x2.0, 25x25x2.0, металлическая Арматура, Уголок Конструкции, купить в Молодечно')
    this.meta.addTag({ name: 'desription', content: 'Труба водогазопроводная и электросварная, арматура, уголок, квадрат металлический, круг металлический, труба профильная 15x15-100x100. Металлопрокат в Молодечно.' })

    this.readfile();
  }

  readfile() {
    const req = new XMLHttpRequest();
    req.open("GET", "/assets/database.xlsx", true);
    req.responseType = "arraybuffer";
    req.onload = () => {
      const workbook = XLSX.read(new Uint8Array(req.response), {type: "array"});
      for (let item in workbook.Sheets) {
        this.db[Object.keys(workbook.Sheets).indexOf(item)] = [[], []];
        for (let i = 1; i < Object.keys(workbook.Sheets[item]).length - 1; i += 1) {
          if (i % 2 === 1) {
            this.db[Object.keys(workbook.Sheets).indexOf(item)][0].push(workbook.Sheets[item][Object.keys(workbook.Sheets[item])[i]].v);
          } else {
            this.db[Object.keys(workbook.Sheets).indexOf(item)][1].push(workbook.Sheets[item][Object.keys(workbook.Sheets[item])[i]].v);
          }
        }
      }

      for (let i = 0; i < 15; i += 1) {
        this.profil[0][0].push(this.db[0][0][i]);
        this.profil[0][1].push(this.db[0][1][i]);
        this.profil[1][0].push(this.db[0][0][i + 15]);
        this.profil[1][1].push(this.db[0][1][i + 15]);
        if (this.db[0][0][i + 30]) {
          this.profil[2][0].push(this.db[0][0][i + 30]);
          this.profil[2][1].push(this.db[0][1][i + 30]);
        }
      }

      for (let i = 0; i < 8; i += 1) {
        this.zaglushki[0][0].push(this.db[7][0][i]);
        this.zaglushki[0][1].push(this.db[7][1][i]);
        if (this.db[7][0][i + 8]) {
          this.zaglushki[1][0].push(this.db[7][0][i + 8]);
          this.zaglushki[1][1].push(this.db[7][1][i + 8]);
        }
      }
    };
    req.send();
  }
}
