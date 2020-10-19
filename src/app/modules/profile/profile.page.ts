import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private menu: MenuController,   
  ) { }

  ngOnInit() {
  }
  openEnd() {
    this.menu.open('end');
  }

  openFirst() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
