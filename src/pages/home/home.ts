import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
	BetadinePage(ket){
		this.navCtrl.push("BetadinePage", {kategori:ket});
	}
	
	SpirulinaCapsulePage(ket){
		this.navCtrl.push("SpirulinaCapsulePage", {kategori:ket});
	}
	
	PropolisPage(ket){
		this.navCtrl.push("PropolisPage", {kategori:ket});
	}
	
	EpisanPage(ket){
		this.navCtrl.push("EpisanPage", {kategori:ket});
	}
	
	TiensCordycepsCapsulesPage(ket){
		this.navCtrl.push("TiensCordycepsCapsulesPage", {kategori:ket});
	}
	
	TianshiMuncordCapsulesPage(ket){
		this.navCtrl.push("TianshiMuncordCapsulesPage", {kategori:ket});
	}
	
}
