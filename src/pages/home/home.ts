import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';

import { Observable } from 'rxjs/Rx';

import { ScheduleComponent } from '../../components/schedule/schedule';
import { AttendanceComponent } from '../../components/attendance/attendance';
import { FeesComponent } from '../../components/fees/fees';
import { KidsComponent } from '../../components/kids/kids';
import { PerformanceComponent } from '../../components/performance/performance';
import { EventsComponent } from '../../components/events/events';
import { ManageClassesComponent } from '../../components/manage-classes/manage-classes';
import { ClassesComponent} from '../../components/classes/classes';
import { GroupsComponent} from '../../components/groups/groups';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  ngOnInit(){
    console.log("will call get coachID");
    this.springData.getCoachID(this.user).subscribe(
      data => {
        console.log("in subscribe to data of getCoachID");

        this.coach= data.coach;
        console.log("coach id received as : " + data.coach[0].coachID);
        console.log("coach = " + this.coach[0].coachID);
      },
      err => console.error(err),
      () =>
        console.log('getCoachID completed'),
    );
  }
  public user;
  public coach;



  constructor(private springData: GetDataFromSpringProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    console.log('received on home page, username = ' + this.user);
  }
  goToSchedule(){

    this.navCtrl.push(ScheduleComponent, {coach:this.coach});
  }
  goToAttendance(){

    this.navCtrl.push(AttendanceComponent, {coach:this.coach});

  }
  goToFees(){

    this.navCtrl.push(FeesComponent, {coach:this.coach});
  }
  getKids(){
    console.log("in kids");
    this.navCtrl.push(KidsComponent, {coach:this.coach});
  }

  goToManageGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent, {coach:this.coach});
  }
  goToPerformance(){
    alert("in performance");
    this.navCtrl.push(PerformanceComponent, {coach:this.coach});
  }
  goToEvents(){
    alert("in events");
    this.navCtrl.push(EventsComponent, {coach:this.coach});
  }


}
