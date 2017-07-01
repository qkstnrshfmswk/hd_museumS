import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the FacilityGokhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-facility-gokha',
  templateUrl: 'facility-gokha.html',
})
export class FacilityGokhaPage {
  facilityType:any;
  gokha:any;
  gokha_img:any;
  gokha_info:Array<any> = [];
  gokha_content:any;
  capability:any;
  index:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.facilityType = navParams.get("facilityType");
    console.log(this.facilityType);
    this.http.get('http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/facility/'+this.facilityType)
    .subscribe(
      data=>
      {
        this.gokha = data.json();
        this.gokha_img = this.gokha[this.index++].Restaruant_img;
        console.log(this.gokha_img);
        this.capability = this.gokha[this.index++].capability;
        console.log("index " + this.index);
        for(  ;this.index < this.gokha.length;this.index++)
        {
            this.gokha_info.push(this.gokha[this.index]);
        }
        console.log(this.gokha_info);

      },
      error=>
      {
        console.log("error");
      });
  }


  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad FacilityGokhaPage');
  }

}
