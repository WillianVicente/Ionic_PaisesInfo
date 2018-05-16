import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais'
import { Regiao } from '../../model/regiao'
import {DetalhesPage} from '../detalhes/detalhes'

@IonicPage()
@Component({
  selector: 'page-list-paises',
  templateUrl: 'list-paises.html',
})
export class ListPaisesPage {

  public paises : Pais [];
  public regiao : Regiao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.regiao = this.navParams.get("regiaoSelecionada");

    let p1 = {nome:'Brazil', regiao:'america'};
    let p2 = {nome:'Argentina', regiao:'america'};
    this.paises = [p1,p2];
  }

  irParaDetalhes(pais:Pais):void{
    this.navCtrl.push(DetalhesPage, {paisSelecionado: pais});
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPaisesPage');
  }

  

  


}
