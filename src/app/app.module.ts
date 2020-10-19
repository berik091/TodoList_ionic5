import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BookService } from './services/book.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDeLSgjj3s9z0kuR4tduBpJv1nLM-TkrFE",
  authDomain: "todo-list-c2a78.firebaseapp.com",
  databaseURL: "https://todo-list-c2a78.firebaseio.com",
  projectId: "todo-list-c2a78",
  storageBucket: "todo-list-c2a78.appspot.com",
  messagingSenderId: "864034279917",
  appId: "1:864034279917:web:29d9d1640f74ef1a1317e4"
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    BookService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
