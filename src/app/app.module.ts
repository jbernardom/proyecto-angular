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
import { FormularioModule } from './formulario/formulario.module';
import { CotizarComponent } from './cotizar/cotizar.component';
import { ContactoComponent } from './formulario/contacto/contacto.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    NosotrosComponent,
    ProductosComponent,
    CotizarComponent,
    CardsComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    FormularioModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "banner", component: BannerComponent },
      { path: "productos", component: ProductosComponent },
      { path: "nosotros", component: NosotrosComponent },
      { path: "cotizar", component: CotizarComponent },
      { path: "cards", component: CardsComponent },
      { path: "contacto", component: ContactoComponent },
      {path: "buscador", component: BuscadorComponent}
    ]),

    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
