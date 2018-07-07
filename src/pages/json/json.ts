import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-json',
  templateUrl: 'json.html',
})
export class JsonPage {

  m:any = {
    "name":"",
    "ns":"",
    "class":"",
    "phone": ""
    }
    m1:any=[]
    constructor(public navCtrl: NavController) {
  
    }
     xuly(){
       this.m1.push(this.m);
       this.boqua();
     }
     boqua(){
       this.m={
        "name":"",
        "ns":"",
        "class":"",
        "phone": ""
       }
     }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonPage');
  }

}
