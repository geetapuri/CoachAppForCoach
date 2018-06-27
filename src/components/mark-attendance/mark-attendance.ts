import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { MarkAttendanceForGroupComponent } from '../mark-attendance-for-group/mark-attendance-for-group';

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
    alert("will call get Schedule");
    this.springData.getSchedule(this.myDate).subscribe(
      data => {
        alert("in subscribe to data of getGroups");

        this.scheduleList= data.Schedule;
      },
      err => console.error(err),
      () =>
        console.log('show schedule completed'),
    );
  }

  text: string;

  myDate: String = new Date().toISOString();
  groupList = [];
  public selectedGroup;
  public scheduleList;
  public attendanceList;
  public kidsList;
  checkedItems:boolean[];

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello MarkAttendanceComponent Component');
    this.text = 'Hello World of Mark Attendance';
  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName )
    }
  }

  getKidsInGroup(item){
    
    this.navCtrl.push(MarkAttendanceForGroupComponent, {item:item});


  }

}
