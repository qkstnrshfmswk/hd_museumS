import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/')
        .subscribe(
        data =>
        {
          this.items = data.json();
          console.log(this.items);
          console.log("length " + this.item_name.length);
          for(let index = 0; index < 5; index++)
          {
            this.item_name.push(this.items[index].item_name);
          }
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
          console.log("length " + this.item_name.length);
          for(let index = 0; index < this.items.length; index++)
          {
            this.item_name.push(this.items[index].item_name);
          }
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
    //this.initializeItems(this.http);
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.item_name = this.item_name.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  gotoItem(name)
  {
    
      this.navCtrl.push("SearchPage", {
        item_name:name
      });
  }

}
