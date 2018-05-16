import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPaisesPage } from './list-paises';

@NgModule({
  declarations: [
    ListPaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPaisesPage),
  ],
})
export class ListPaisesPageModule {}
