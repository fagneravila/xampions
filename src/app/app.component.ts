import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Usuarios',
      url: '/usuario',
      icon: 'list'
    },
    {
      title: 'Jogos',
      url: '/jogo',
      icon: 'list'
    },
    {
      title: 'Números',
      url: '/numeros',
      icon: 'list'
    },
    {
      title: 'Times',
      url: '/time',
      icon: 'list'
    },
    {
      title: 'Pagamentos',
      url: '/pagamentos',
      icon: 'list'
    },
    {
      title: 'Sair',
      url: '/numeros',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private storage: NativeStorage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
