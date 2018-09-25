import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeTestComponent } from './home-test/home-test.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsTestComponent } from './details-test/details-test.component';
import { HttpInterceptorService } from './utils/HttpUtils.Service';
import { IndexedDbService } from './utils/IndexedDb.Service';

registerLocaleData(zh);
const appRoutes :Routes=[
  {path:'',component:HomeTestComponent},
   {path:'details-test',component:DetailsTestComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeTestComponent,
    DetailsTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
