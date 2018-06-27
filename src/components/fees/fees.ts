import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { PayFeesComponent} from '../pay-fees/pay-fees';

/**
 * Generated class for the FeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fees',
  templateUrl: 'fees.html'
})
export class FeesComponent {

  text: string;
  public selectedKid;
  public feeList;
  public kidsList;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController ) {
    console.log('Hello FeesComponent Component');
    this.text = 'Hello World';
  }

  viewFees(){
    console.log("View Fees");
    this.springData.getKids().subscribe(
      data => {

        this.kidsList= data.kidList;
        this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getKids completed')
    );

  }
  public onItemSelection(selection){
    let item=this.selectedKid;
    if (selection!=undefined){
      console.log("item selected: "+item.kidName );

    }
  }

getFeesForKid(item){
  this.springData.viewFeesForKid(item).subscribe(
    data => {


      this.feeList= data.feeList;

    },
    err => console.error(err),
    () => console.log('viewFeesKid completed')
  );

}

payFees(selectedFeeItem){
console.log("payFees for selectedFeeItem = " + selectedFeeItem.dateOfAttendance);
console.log("child id is with me or no? " + this.selectedKid.kidName);
this.navCtrl.push(PayFeesComponent, {selectedFeeItem:selectedFeeItem, selectedKid:this.selectedKid});

}


}
