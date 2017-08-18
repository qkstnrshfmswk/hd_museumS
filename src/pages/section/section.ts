import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemPage } from '../item/item';
/**
 * Generated class for the SectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-section',
  templateUrl: 'section.html',
})
export class SectionPage {
  section:string;
  sectionId:string;
  item_info:any;
  sectionFull:string;
  section_lit:Array<any> = [];
  myimage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.section = navParams.get("section");
    this.sectionId = navParams.get("sectionId");
    console.log("section" + this.section);
    this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/item/list/' + this.sectionId)
      .subscribe(
        data =>
        {
            this.item_info = data.json();
            console.log("item number " + this.item_info.length);
            console.log("data " + this.item_info);
        },
        error=>
        {
          console.log("err");
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionPage');
  }
  
  gotoItem(itemId){
      console.log("section itme id " + itemId);
      this.navCtrl.push("ItemPage", {
        section: this.section,
        itemId: itemId,
        sectionId: this.sectionId
      });
  }

  gotoSearch()
  {
      this.navCtrl.push("SearchPage");
  }


}
