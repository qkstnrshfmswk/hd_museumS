import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapTabPage } from './map-tab';

@NgModule({
  declarations: [
    MapTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MapTabPage),
  ],
  exports: [
    MapTabPage
  ]
})
export class MapTabPageModule {}
