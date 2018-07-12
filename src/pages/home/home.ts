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
import { AddGroupsComponent} from '../../components/add-groups/add-groups';
import { GroupsComponent} from '../../components/groups/groups';
import { ShowClassInfoCoachComponent} from '../../components/show-class-info-coach/show-class-info-coach';

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
        console.log("get groupList for coach " );
        console.log("sending date as  : " + this.myDate);
        this.getGroupListForToday();
      },
      err => console.error(err),
      () =>
        console.log('getCoachID completed'),
    );
  }
  public user;
  public coach;
  public coachAvatar="assets/imgs/coachGsmall.png";
  public groupList;
  public myDate = new Date();
  public getGroupListDone= false;
  public groupReceived:Boolean = false;




  constructor(private springData: GetDataFromSpringProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    this.coach = navParams.get('coach');
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

  goToGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent, {coach:this.coach, role:this.user});
  }
  goToPerformance(){
    alert("in performance");
    this.navCtrl.push(PerformanceComponent, {coach:this.coach});
  }
  goToEvents(){
    alert("in events");
    this.navCtrl.push(EventsComponent, {coach:this.coach});
  }

  /*goToScheduleForToday(){
    console.log("in goToScheduleForToday");
    this.navCtrl.push(ShowClassInfoCoachComponent,{coach:this.coach} );
  }*/

  getGroupList(){
    //get all the kids list from DB first
    console.log("in getGroupList, coachID = " + this.coach[0].coachID);
    this.springData.getGroups(this.coach).subscribe(
      data => {


        this.groupList= data.groupList;

      },
      err => console.error(err),
      () => console.log('getGroupList completed')
    );
  }

  getGroupListForToday(){
    console.log("in getGroupListForToday, coachID = " + this.coach[0].coachID);
    this.springData.getGroupsForToday(this.coach, this.myDate).subscribe(
      data => {


        this.groupList= data.Schedule;
        if(data.Schedule[0]){
          console.log("group received as : " + data.Schedule[0].groupName);
          this.groupReceived=true;
        } else {
          console.log("empty list");
          this.groupReceived=false;
        }

      },
      err => {
        console.error(err);

      },
      () => {
        console.log('getGroupList completed')
        this.getGroupListDone=true;
      }
    );

  }

  goToShowClassInfo(selectedGroup){
    this.navCtrl.push(ShowClassInfoCoachComponent,{coach:this.coach, selectedGroup:selectedGroup});
  }


}
