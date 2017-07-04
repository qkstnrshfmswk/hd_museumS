import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemPage } from '../item/item';
/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: string = '';
  items:Array<any> = [];
  item_name:Array<any> = [];
  item_info;
  item_id;
  section_id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/')
        .subscribe(
        data =>
        {
          this.items = data.json();
          console.log(this.items);
          console.log("length " + this.items.length);

        },
        error =>
        {
          console.log("error");
        });
}

  initializeItems(http:Http){
   this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/')
        .subscribe(
        data =>
        {
          this.items = data.json();
          console.log(this.items);

        },
        error =>
        {
          console.log("error");
        });

        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
   getItems(ev: any) {
    
    // Reset items back to all of the items
    this.initializeItems(this.http);
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.item_name = this.item_name.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

//   getItemId(name, http:Http)
//   {
//  this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/search/'+name)
//         .subscribe(
//           data=>
//           {
//               this.item_info = data.json();
//               console.log("search data " + this.item_info);
//               this.item_id = this.item_info[0].item_id;
//               this.section_id = this.item_info[0].section_id;
//               console.log("item " + this.item_info + " " + this.section_id);
//           }
//         )
//       console.log("search name "+ name);
//       console.log("search id "+ this.item_id);
//   }



  gotoItem(item_id, section_id)
  {

     //this.getItemId(name, this.http);
      console.log("parameter " + item_id);
      console.log("parameter section "+ section_id);
      this.navCtrl.push("ItemPage", {
        itemId : item_id,
        sectionId : section_id
      });
  }

}
