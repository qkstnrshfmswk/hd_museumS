import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage2Page } from './map-page2';

@NgModule({
  declarations: [
    MapPage2Page,
  ],
  imports: [
    IonicPageModule.forChild(MapPage2Page),
  ],
  exports: [
    MapPage2Page
  ]
})
export class MapPage2PageModule {}
