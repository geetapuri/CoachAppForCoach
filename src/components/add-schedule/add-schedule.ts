import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { ScheduleComponent } from '../schedule/schedule';

/**
 * Generated class for the AddScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-schedule',
  templateUrl: 'add-schedule.html',
  providers : [GetDataFromSpringProvider]
})
export class AddScheduleComponent implements OnInit{

  ngOnInit(){
    alert("will call get Groups");
    this.springData.getGroups(this.myDate).subscribe(
      data => {
        alert("in subscribe to data of getGroups");

        this.groupList= data.groupList;
        this.selectedGroup= data.groupList[0];
        alert("groupList seems like " + this.groupList.entries().next().value[1]);
      },
      err => console.error(err),
      () => console.log('getGroups completed')
    );
  }
  text: string;
  myDate: String = new Date().toISOString();
  groupList = [];
  public selectedGroup;
  myTime: string;


  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController ) {
    console.log('Hello AddScheduleComponent Component');
    this.text = 'Hello World Add Schedule';
  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName )
    }
  }

  addSchedule(){
    alert("will call add Schedule");
    this.springData.addSchedule(this.myDate, this.selectedGroup.groupID, this.myTime ).subscribe(
      data => {
        alert("in subscribe to data of getGroups");

        this.groupList= data.groupList;
      },
      err => console.error(err),
      () => {
        console.log('add schedule completed');
        alert("added schedule, taking you back to Schedules page");
        this.navCtrl.push(ScheduleComponent);
      }
    );


  }


}
