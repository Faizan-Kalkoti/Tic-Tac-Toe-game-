import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BoardComponent } from './board/board.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FirstCompComponent } from './first-comp/first-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    MyComponentComponent,
    BoardComponent,
    FirstCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
