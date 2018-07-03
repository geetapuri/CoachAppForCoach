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
    console.log("will call get Groups");
    this.springData.getGroups(this.coach).subscribe(
      data => {
        console.log("in subscribe to data of getGroups");

        this.groupList= data.groupList;
        this.selectedGroup= data.groupList[0];
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
  public coach;


  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams ) {
    console.log('Hello AddScheduleComponent Component');
    this.text = 'Hello World Add Schedule';
    this.coach = this.navParams.get('coach');
  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName )
    }
  }

  addSchedule(){
    console.log("will call add Schedule");
    this.springData.addSchedule(this.myDate, this.selectedGroup.groupID, this.myTime ).subscribe(
      data => {
        console.log("in subscribe to data of getGroups");

        this.groupList= data.groupList;
      },
      err => console.error(err),
      () => {
        console.log('add schedule completed');
        console.log("added schedule, taking you back to Schedules page");
        this.navCtrl.push(ScheduleComponent, {coach:this.coach});
      }
    );


  }


}
