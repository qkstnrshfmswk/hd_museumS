import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MyApp} from './app.component';
import {Service} from '../app/service';
import {IonicStorageModule} from '@ionic/storage';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import {Http, HttpModule} from '@angular/http';
import {BrowserModule} from "@angular/platform-browser";
import { CategoryPage } from '../pages/category/category';
import { FacilityPage } from '../pages/facility/facility';
import { FacilityPageModule } from '../pages/facility/facility.module';
import { FacilityDetailPageModule } from '../pages/facility-detail/facility-detail.module';
import { FacilityGokhaPageModule } from '../pages/facility-gokha/facility-gokha.module';
import { FacilityLibraryPageModule } from '../pages/facility-library/facility-library.module';
import { SearchPageModule } from '../pages/search/search.module';
import { QrScannerPageModule } from '../pages/qr-scanner/qr-scanner.module';
import { SectionPageModule } from '../pages/section/section.module';
import { ItemPageModule } from '../pages/item/item.module';
import { MapPageModule } from '../pages/map/map.module';
import { MapTabPageModule } from '../pages/map-tab/map-tab.module';
import { MapPage2PageModule } from '../pages/map-page2/map-page2.module';
import { MapPage1PageModule } from '../pages/map-page1/map-page1.module';
//entry point에 추가
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        MyApp,
        CategoryPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            backButtonText: ''
        },),
        IonicStorageModule.forRoot(),
        BrowserModule,
        FacilityPageModule,
        FacilityDetailPageModule,
        FacilityGokhaPageModule,
        FacilityLibraryPageModule,
        SearchPageModule,
        QrScannerPageModule,
        HttpModule,
        MapPageModule,
        MapTabPageModule,
        ItemPageModule,
        SectionPageModule,
        MapPage1PageModule,
        MapPage2PageModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [Http]
        })

    ],
    exports: [BrowserModule, HttpModule, TranslateModule],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CategoryPage,
        FacilityPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Service,
        StatusBar,
        SplashScreen
    ]
})
export class AppModule {
}
