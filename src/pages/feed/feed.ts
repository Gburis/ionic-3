import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed ={
    titulo:"Gabriel Olimpio",
    data:"24/09/2018",
    descricao:"estou criando meu primeiro app",
    likes: 30,
    coments:2,
    time_coments:"11h"
  }

  public nome_usuario:string="Gabriel Olimpio Script";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisValores(num1:number, num2:number):void{
      //alert(num1 + num2);
  }

  ionViewDidLoad() {
    
    //this.somaDoisValores(2, 5);

  }

}
