import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(
    private menu: MenuController,  
  ) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
