import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  section;
  sectionId;
  itemId;
  item_info:any;
  item_img :any;
  item_desc:any;
  item_name:any;
  items:any;
  item_bottom_list:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.section = navParams.get("section");
    this.itemId = navParams.get("itemId");
    this.sectionId = navParams.get("sectionId");
    console.log("item id " + this.itemId);
    this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/details/'+this.itemId)
      .subscribe(
        data=>
        {
            this.item_info = data.json();
            console.log("item log" + data.json());
            this.item_img = this.item_info[0].item_img;
            this.item_desc = this.item_info[0].item_desc;
            this.item_name = this.item_info[0].item_name;
            this.sectionId = this.item_info[0].section_id;
            console.log("item section id" + this.sectionId);
        },
        error=>
        {

        });
    console.log("section id " + this.sectionId);
    this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/list/'+this.sectionId)
      .subscribe(
        item_data=>
        {
          this.item_bottom_list = item_data.json();
          console.log("hih" + this.item_bottom_list);

            for(let index; index< this.item_bottom_list.length ; index++)
            {
              if(this.item_bottom_list[index].item_id == this.itemId)
              {

              }else{
              this.items.push(this.item_bottom_list[index])

              }
            }
            console.log(this.items);
        },
        error=>
        {

        });


}
   gotoSearch()
    {
        this.navCtrl.push("SearchPage");
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
  gotoItem(itemId){
      console.log("section itme id " + itemId);
      this.navCtrl.push("ItemPage", {
        section: this.section,
        itemId: itemId,
        sectionId: this.sectionId
      });
  }
}
