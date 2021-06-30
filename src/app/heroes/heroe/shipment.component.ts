import { Component } from "@angular/core";

@Component({
  selector: 'app-shipment',
  templateUrl: 'Shipment.component.html'
})


export class ShipmentComponent{
  public cName:String = 'JB Hunt';
  public cTruck:String = 'Reefer Truck';
  public cTShipment:String = 'FTL';

  public sName:String = 'Walmart';
  public sLoad:String = 'Perishable Food';
  public sPallets:number|string = 28 + ' Pallets';

  public bName:String = 'Sebastian Oliveros';
  public bPhone:String = '805 2254 302';
  public bEmail:string = 'example@jbhunt.com';

  changeCInfo():void{
  this.sName = 'HomeDepot';
  this.sLoad = 'Boxes';
  this.sPallets = 18;
  this.cTruck = 'Dry Van';
  this.cTShipment = 'Partial';
  }

}
