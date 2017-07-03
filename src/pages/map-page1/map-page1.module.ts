import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage1Page } from './map-page1';

@NgModule({
  declarations: [
    MapPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(MapPage1Page),
  ],
  exports: [
    MapPage1Page
  ]
})
export class MapPage1PageModule {}
