import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemPage } from '../item/item';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
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
  items:Array<any> =[];
  item_name:Array<any>=[];
  item_info;
  item_id;
  section_id;
  item_length:number = 0;
  item_name_temp:Array<any> = [];
  options: BarcodeScannerOptions;
  results: {};

  constructor( private barcode:BarcodeScanner, 
               public navCtrl: NavController, 
               public navParams: NavParams, 
               public http:Http,
               public viewCtrl:ViewController) {
  this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/item/')
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
    console.log("length value1 : " + this.item_length);
    this.initializeItems();
    console.log("length value2 : " + this.item_length);
            
}

  initializeItems(){
   this.item_name.length=0;    
   this.item_name_temp.length=0;
    for(let index = 0; index < this.items.length; index++)
    {
      this.item_name.push(this.items[index].item_name);
      this.item_name_temp.push(this.items[index].item_name);
    }
   this.item_length = this.items.length;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
   getItems(ev: any) {
    
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log("length value4 : " + this.item_length);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.item_name = this.item_name.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   
}

async scanBarcode(){
   this.options={
   prompt: 'Scan a barcode to see the result!'
}
    const results = await this.barcode.scan(this.options);
    console.log(this.results);
    
    var qrScanInput = results.text.split('/');
    var itemId = qrScanInput[0];
    var sectionId = qrScanInput[1];

    this.navCtrl.push("ItemPage", {itemId: itemId, sectionId: sectionId}).then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
      });
}


  getItemId(name, http:Http)
  {
 this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/item/search/'+name)
        .subscribe(
          data=>
          {
              this.item_info = data.json();
              console.log("search data " + this.item_info);
              this.item_id = this.item_info[0].item_id;
              this.section_id = this.item_info[0].section_id;
              console.log("item " + this.item_info + " " + this.section_id);
          }
        )
      console.log("search name "+ name);
      console.log("search id "+ this.item_id);
  }



  gotoItem(item_name)
  {
    var index:number;
      for( index = 0; index < this.item_name_temp.length;index++)
      {
        if(this.item_name_temp[index] == item_name)
          break;
      }
      
      this.navCtrl.push("ItemPage", {
        itemId : this.items[index].item_id,
        sectionId : this.items[index].section_id
      }).then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;                                                                                                                                                                                                                                                                    
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
      });
  }

}
