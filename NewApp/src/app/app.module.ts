import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DomowaComponent } from './domowa/domowa.component';
import { NieMaComponent } from './nie-ma/nie-ma.component';
import { ArchiwaComponent } from './archiwa/archiwa.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: DomowaComponent},
      {path: 'archiwa/:year/:month', component: ArchiwaComponent},
      {path: '**', component: NieMaComponent}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
