import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ReceivePaymentComponent } from '../receive-payment/receive-payment';
import { FeesComponent } from '../fees/fees';


/**
 * Generated class for the SavePaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'save-payment',
  templateUrl: 'save-payment.html'
})
export class SavePaymentComponent implements OnInit{

  ngOnInit(){

    this.springData.viewFeeForGroupDate(this.date, this.groupID).subscribe(
      data => {
        this.kidsFeeList= data.feeMgmtList;
        this.checkedItems = new Array(this.kidsFeeList.length);
        this.kidsFeeList.forEach((item,index) => {
          console.log(item);
          console.log(index);
          if (item.feePaid=="Y"){
            console.log("found a check at index = " + index);
            this.checkedItems[index]=true;
          } else {
            this.checkedItems[index]=false;
          }


        });
      },
      err => console.error(err),
      () => console.log('viewFeeForGroupDate completed')
    );
   }




  text: string;
  public coach;
  public user;
  public groupID;
  public kidsFeeList;
  public checkedItems:Boolean[];
  public groupName;
  public scheduleList;
  public date;
  public result;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello SavePaymentComponent Component');
    this.text = 'Hello World';
    this.coach = this.navParams.get('coach');
    this.user=this.navParams.get('role');
    this.groupID= this.navParams.get('groupID');
    this.date=this.navParams.get('date');
    this.groupName=this.navParams.get('groupName');
  }
  goBackHome(){
    console.log("going back to home page");
    this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
  }

  savePayment(){
    console.log("Now ill go and save the fee status for group of kids");
    this.checkedItems.forEach((item,index) => {
      console.log(item);
      console.log(index);
      console.log("checked Items length = " + this.checkedItems.length);
      if (item){
        console.log("found a check at index = " + index);
        this.kidsFeeList[index].feePaid="Y";
      } else {
        this.kidsFeeList[index].feePaid="N";
      }


    });


    this.springData.payFees(this.kidsFeeList).subscribe(

      data => {

        console.log("received data");
        this.result= data.result;
        console.log("going to Fee Component now");
        this.navCtrl.push(FeesComponent, {coach:this.coach, role:this.user, groupID:this.groupID, groupName:this.groupName});

      },
      err => console.error(err),
      () =>
        console.log('save Fee Paid completed'),
    );

  }

}
