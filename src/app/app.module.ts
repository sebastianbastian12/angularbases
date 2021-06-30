import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShipmentComponent } from './heroes/heroe/shipment.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';



@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    ContadorComponent



  ],
  imports: [
    BrowserModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
