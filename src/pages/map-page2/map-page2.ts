import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the MapPage2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map-page2',
  templateUrl: 'map-page2.html',
})
export class MapPage2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage2Page');
  }

      gotoSearch()
    {
        this.navCtrl.push("SearchPage");
    }

  navHome()
  {
    this.navCtrl.push("HomePage");
  }

}
