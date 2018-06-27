import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
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
export class HomePage {

  public user;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    console.log('received on home page, username = ' + this.user);
  }
  goToSchedule(){

    this.navCtrl.push(ScheduleComponent, {});
  }
  goToAttendance(){

    this.navCtrl.push(AttendanceComponent);

  }
  goToFees(){

    this.navCtrl.push(FeesComponent);
  }
  getKids(){
    alert("in kids");
    this.navCtrl.push(KidsComponent);
  }

  goToManageGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent);
  }
  goToPerformance(){
    alert("in performance");
    this.navCtrl.push(PerformanceComponent);
  }
  goToEvents(){
    alert("in events");
    this.navCtrl.push(EventsComponent);
  }


}
