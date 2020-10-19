import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  navigate: any;

  books: string[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private bookService: BookService,
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  ngOnInit() {
    this.books = this.bookService.getData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/home",
          icon: "home-outline"
        },
        {
          title: "Profile",
          url: "/profile",
          icon: "person-outline"
        },
        {
          title: "Archive",
          url: "/footer",
          icon: "archive-outline"
        },
      ]
  }
}

