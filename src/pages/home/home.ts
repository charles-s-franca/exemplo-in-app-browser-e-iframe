import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    InAppBrowser
  ]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
    ) {

  }

  openGoolePage(){
      const browser = this.iab.create('https://ionicframework.com/', "_blank");
      browser.show();
  }

}
