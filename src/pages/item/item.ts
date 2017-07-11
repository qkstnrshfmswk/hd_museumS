import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
  items:Array<any> = [];
  item_bottom_list:Array<any> = [];
  video_link:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http:Http,
              private youtube: YoutubeVideoPlayer) {
    this.sectionId = navParams.get("sectionId");
    this.itemId = navParams.get("itemId");
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
            this.section = this.item_info[0].item_section;
            this.video_link = this.item_info[0].item_video;
            console.log("item section id" + this.sectionId);
        },
        error=>
        {
          console.log("err");            
        });
   
    this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/item/list/' + this.sectionId)
      .subscribe(
        data =>
        {
            this.items = data.json();
            console.log(this.items);
            for(let index = 0; index < this.items.length; index++)
            {
              // console.log("item id index " + index + " " + this.items[index].item_id);
              if(this.items[index].item_id == this.itemId)
              {
                console.log("identical");
                continue;
              }else
              {
                this.item_bottom_list.push(this.items[index]);
                console.log("push " + this.items[index].item_id);
              }
            }
        },
        error=>
        {
          console.log("err");
        });

        console.log("bottom list " + this.item_bottom_list);
        
}

  gotoSearch()
  {
    this.navCtrl.push("SearchPage");
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ItemPage');
  }

  playVideo() {
    console.log("video link " + this.video_link);
    var link = this.video_link.match("v=([a-zA-Z0-9_\-]+)&?")[1];
    console.log("link " + link);
    // var videoId = link.match("videoId=([a-zA-Z0-9\-_]+)&?");
    // console.log("videoId " + videoId);
    // var vId = videoId ? videoId[1] : "";
    // this.youtube.openVideo(vId);
      this.youtube.openVideo(link);
  }


  gotoItem(itemId)
  {
    this.navCtrl.push("ItemPage", {
        section: this.section,
        itemId: itemId,
        sectionId: this.sectionId
    });
  }
}
