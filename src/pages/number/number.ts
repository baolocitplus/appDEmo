import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-number',
  templateUrl: 'number.html',
})
export class NumberPage {

  kq : number;
  a: number;
  b: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  xuly(){
    this.kq = this.a*1 + this.b*1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumberPage');
  }

}
