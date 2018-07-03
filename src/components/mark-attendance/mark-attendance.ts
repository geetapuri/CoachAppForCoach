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
    console.log("will call get Schedule");
    this.springData.getSchedule(this.coach).subscribe(
      data => {
        console.log("in subscribe to data of getGroups");

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
  public coach;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello MarkAttendanceComponent Component');
    this.text = 'Hello World of Mark Attendance';
    this.coach = this.navParams.get('coach');
  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName )
    }
  }

  getKidsInGroup(item){
    
    this.navCtrl.push(MarkAttendanceForGroupComponent, {item:item, coach:this.coach});


  }

}
