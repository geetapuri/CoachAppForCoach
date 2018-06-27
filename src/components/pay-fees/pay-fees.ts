import { Component } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { FeesComponent } from '../fees/fees';

/**
 * Generated class for the PayFeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pay-fees',
  templateUrl: 'pay-fees.html'
})
export class PayFeesComponent {

  text: string;
  public kidID;
  public feeList;
  public selectedKid;
  public kidsList;
  public myDate;
  public selectedFeeItem;
  public result;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PayFeesComponent Component');
    this.text = 'Hello World';
    this.selectedKid= navParams.get('selectedKid');
    this.selectedFeeItem = navParams.get('selectedFeeItem');
    console.log("date = " + this.selectedFeeItem.dateOfAttendance + ", kidID = "+ this.selectedKid.kidID);


  }

  saveFeePaid(){
    console.log("Now ill go and save the fee status");
    console.log("kidID = " + this.selectedKid.kidID);
    console.log("date = " + this.selectedFeeItem.dateOfAttendance);
    this.springData.payFees(this.selectedKid.kidID, this.selectedFeeItem.dateOfAttendance).subscribe(
      data => {


        this.result= data.result;
        this.navCtrl.push(FeesComponent);

      },
      err => console.error(err),
      () =>
        console.log('save Fee Paid completed'),
    );

  }

}
