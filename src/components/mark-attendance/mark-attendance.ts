import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { AttendanceComponent } from '../attendance/attendance';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the MarkAttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mark-attendance',
  templateUrl: 'mark-attendance.html'
})
export class MarkAttendanceComponent implements OnInit{
  ngOnInit(){
    console.log("showAttendanceForDate");

    this.springData.viewAttendanceForGroupDate(this.date, this.groupID).subscribe(
      data => {
        this.attendanceList= data.attendance;
        this.checkedItems = new Array(this.attendanceList.length);
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
      () => console.log('viewAttendanceForGroupDate completed')
    );

  }

  text: string;

  myDate: String = new Date().toISOString();
  groupList = [];
  public selectedGroup;
  public scheduleList;
  public attendanceList;
  public kidsList;
  //checkedItems:boolean[];
  public coach;
  public groupID;
  public date;
  public checkedItems:Boolean[];
  public result;
  public user;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello MarkAttendanceComponent Component');
    this.text = 'Hello World of Mark Attendance';
    this.coach = this.navParams.get('coach');
    this.date = this.navParams.get('date');
    this.groupID = this.navParams.get('groupID');
    this.user = this.navParams.get('role');
    console.log(" in mark attendance, user = " + this.user);
  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName )
    }
  }

  /*getKidsInGroup(item){

    this.navCtrl.push(MarkAttendanceForGroupComponent, {item:item, coach:this.coach});


  }*/

  saveAttendance(){
    console.log(" save attendance");


      console.log("saving attendance for kids");
      this.checkedItems.forEach((item,index) => {
        console.log(item);
        console.log(index);
        console.log("checked Items length = " + this.checkedItems.length);
        if (item){
          console.log("found a check at index = " + index);
          this.attendanceList[index].presentAbsent="P";
        } else {
          this.attendanceList[index].presentAbsent="A";
        }


      });


      //send this kids list for marking attendance now
      this.springData.markAttendance(this.attendanceList).subscribe(
        data => {


          this.result= data.result;
          this.navCtrl.push(AttendanceComponent, {coach:this.coach});

        },
        err => console.error(err),
        () =>
          console.log('mark Attendance completed'),
      );
}

goBackHome(){
  console.log("going back to home page");
  this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
}


}
