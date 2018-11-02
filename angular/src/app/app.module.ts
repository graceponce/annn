import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FacturaComponent } from './factura/factura.component';
import { CarritoComponent } from './carrito/carrito.component';
import { GeneralService } from './services/general.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacturaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
