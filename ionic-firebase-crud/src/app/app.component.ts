import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// config firebase
import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAowRSpNvQV5zy5tTPeOMViVUl4KVgmBSQ',
  authDomain: 'super-duper-meme.firebaseapp.com',
  databaseURL: 'https://super-duper-meme.firebaseio.com',
  projectId: 'super-duper-meme',
  storageBucket: 'super-duper-meme.appspot.com',
  messagingSenderId: '446656353588',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // initialize firebase
    firebase.initializeApp(config);
  }
}
