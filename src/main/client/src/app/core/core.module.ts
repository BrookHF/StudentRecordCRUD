/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


/* our own custom services  */
// import { SomeSingletonService } from './some-singleton/some-singleton.service';

@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [],
  providers: [
    /* our own custom services  */
    // SomeSingletonService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}