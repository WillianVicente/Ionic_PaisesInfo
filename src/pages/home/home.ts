import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPaisesPage } from '../list-paises/list-paises';
import { Regiao } from '../../model/regiao'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public regioes : Regiao [];

  constructor(public navCtrl: NavController) {
    let p1 = {nome:'Todas'};
    let p2 = {nome:'Africa'};
    let p3 = {nome:'Americas'};
    let p4 = {nome:'Asia'};
    let p5 = {nome:'Europe'};
    let p6 = {nome:'Oceania'};
    this.regioes = [p1,p2,p3,p4,p5,p6];
  }

  openAddPage(regiao: Regiao){
      this.navCtrl.push(ListPaisesPage, {paisSelecionado: regiao})
  }
}
