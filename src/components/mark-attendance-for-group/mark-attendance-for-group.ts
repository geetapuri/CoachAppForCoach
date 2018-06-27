import { Component } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { AttendanceComponent } from '../attendance/attendance';


/**
 * Generated class for the MarkAttendanceForGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mark-attendance-for-group',
  templateUrl: 'mark-attendance-for-group.html'
})
export class MarkAttendanceForGroupComponent {

  text: string;
  public item;
  public attendanceList;
  public kidsList;
  public checkedItems:Boolean[];
  public myDate;
  public result;



  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello MarkAttendanceForGroupComponent Component');
    this.text = 'Hello World';
    this.item= navParams.get('item');
    this.myDate = this.item.date;

    this.springData.checkAttendance(this.item).subscribe(
      data => {


        this.attendanceList= data.attendanceList;
        if(this.attendanceList!=undefined){

          console.log(" attendance for this date previously marked");
          this.springData.getKidsInGroup(this.item).subscribe(
            data => {


              this.kidsList= data.kidsList;
              this.checkedItems = new Array(this.kidsList.length);
              this.attendanceList.forEach((item,index) => {
                console.log(item);
                console.log(index);
                if (item.presentAbsent=="P"){
                  console.log("found a check at index = " + index);
                  this.checkedItems[index]=true;
                } else {
                  this.checkedItems[index]=false;
                }


              });
            },
            err => console.error(err),
            () =>
              console.log('get kids in group completed'),
          );
        } else {
          //in else of attendanceList undefined
          this.springData.getKidsInGroup(this.item).subscribe(
            data => {


              this.kidsList= data.kidsList;
              this.checkedItems = new Array(this.kidsList.length);

            },
            err => console.error(err),
            () =>
              console.log('get kids in group completed'),
          );
        }
      },
      err => console.error(err),
      () =>
        console.log('check attendance completed'),
    );
  }

  saveAttendance(){
    console.log("saving attendance for kids");
    this.checkedItems.forEach((item,index) => {
      console.log(item);
      console.log(index);
      console.log("checked Items length = " + this.checkedItems.length);
      if (item){
        console.log("found a check at index = " + index);
        this.kidsList[index].present="P";
      } else {
        this.kidsList[index].present="A";
      }


    });

    //send this kids list for marking attendance now
    this.springData.markAttendance(this.item, this.kidsList).subscribe(
      data => {


        this.result= data.result;
        this.navCtrl.push(AttendanceComponent);

      },
      err => console.error(err),
      () =>
        console.log('mark Attendance completed'),
    );
  }


}
