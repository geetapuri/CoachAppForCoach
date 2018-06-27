import { Component } from '@angular/core';
import { AddScheduleComponent } from '../add-schedule/add-schedule';
import { NavController } from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import { EditScheduleDetailsComponent } from '../edit-schedule-details/edit-schedule-details';
/**
 * Generated class for the ScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent {

  text: string;
  scheduleList = [];
  myDate: String = new Date().toISOString();
  groupList =[];
  public selectedGroup;

  constructor(private springData: GetDataFromSpringProvider, public navCtrl: NavController, ) {
    console.log('Hello ScheduleComponent Component');
    this.text = 'Hello World Schedule Component';
  }

  getSchedule(){


    this.springData.getSchedule(this.myDate).subscribe(
      data => {


        this.scheduleList= data.Schedule;
      },
      err => console.error(err),
      () =>
        console.log('show schedule completed'),
    );

  }

  addSchedule(){

    this.navCtrl.push(AddScheduleComponent, {});

  }

  goToEditScheduleDetails(item){

    this.navCtrl.push(EditScheduleDetailsComponent, {item: item});

  }





}
