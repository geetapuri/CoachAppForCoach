import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../components/login/login';
import { GetDataFromSpringProvider } from '../providers/get-data-from-spring/get-data-from-spring'
import { ScheduleComponent } from '../components/schedule/schedule';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

