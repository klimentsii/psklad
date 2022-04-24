import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu() {
    document.querySelector('#nav_toggle')?.classList.toggle('active');
    document.querySelector('#nav')?.classList.toggle('active');
  }
}
