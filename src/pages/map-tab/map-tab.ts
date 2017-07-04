import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage1Page } from '../map-page1/map-page1';
import { MapPage2Page } from '../map-page2/map-page2';
import { MapPage } from '../map/map';
/**
 * Generated class for the MapTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map-tab',
  templateUrl: 'map-tab.html',
})
export class MapTabPage {
tab1Root: any = MapPage2Page;
tab2Root: any = MapPage1Page;
tab3Root: any = MapPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapTabPage');
  }

}
