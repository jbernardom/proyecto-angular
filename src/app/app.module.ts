import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { CardsComponent } from './cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    NosotrosComponent,
    ProductosComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"productos",component:ProductosComponent}
    ]),
    RouterModule.forRoot([
      {path:"nosotros",component:NosotrosComponent}
    ]),
    RouterModule.forRoot([
      {path:"cards",component:CardsComponent}
    ]),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

