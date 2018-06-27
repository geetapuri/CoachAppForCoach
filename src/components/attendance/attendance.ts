import { Component } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { MarkAttendanceComponent } from '../mark-attendance/mark-attendance';

/**
 * Generated class for the AttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attendance',
  templateUrl: 'attendance.html'
})
export class AttendanceComponent {

  text: string;
  public kidsList;

  public selectedKid;
  public attendanceList;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController ) {
    console.log('Hello AttendanceComponent Component');
    this.text = 'Hello World';


  }



  viewAttendance(){
    //Get Kids list in a dropdown
    alert("view attendance");
    this.springData.getKids().subscribe(
      data => {

        this.kidsList= data.kidList;
        this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getKids completed')
    );

  }
  public onItemSelection(selection){
    let item=this.selectedKid;
    if (selection!=undefined){
      console.log("item selected: "+item.kidName );

    }
  }
  markAttendance(){

    this.navCtrl.push(MarkAttendanceComponent);

  }



  getAttendanceForKid(item){
    this.springData.viewAttendanceForKid(item).subscribe(
      data => {


        this.attendanceList= data.attendance;

      },
      err => console.error(err),
      () => console.log('viewAttendanceKid completed')
    );
  }

}
