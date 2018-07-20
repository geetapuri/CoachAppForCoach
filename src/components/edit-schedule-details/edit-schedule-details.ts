import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { ScheduleComponent } from '../schedule/schedule';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the EditScheduleDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-schedule-details',
  templateUrl: 'edit-schedule-details.html'
})
export class EditScheduleDetailsComponent {

  text: string;
  public item;
  public groupName;
  public myDate;
  public myTime;
  public result;
  public groupList;
  public selectedGroup;
  public groupID;
  public coach;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public springData: GetDataFromSpringProvider) {
    console.log('Hello EditScheduleDetailsComponent Component');
    this.text = "Hello how r u ?"
    this.item = navParams.get('item');
    this.myDate = this.item.date;
    console.log(" date received as : " + this.item.date);
    this.groupName = this.item.groupName;
    this.myTime = this.item.time;
    this.groupID = this.item.groupID;
    this.coach= this.navParams.get('coach');
  }

saveSchedule(){
  console.log("to send this for saving , new date = " + this.myDate);
  this.springData.saveSchedule(this.item, this.myDate).subscribe(
    data => {
      console.log("in subscribe to data of getGroups");

      this.result= data.result;
      this.navCtrl.push(HomePage, {coach:this.coach});
    },
    err => console.error(err),
    () =>
      console.log('show schedule completed'),
  );
}




}

