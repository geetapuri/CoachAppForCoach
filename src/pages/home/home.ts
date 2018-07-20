import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';

import { Observable } from 'rxjs/Rx';

import { AddScheduleComponent } from '../../components/add-schedule/add-schedule';
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
import { MarkAttendanceComponent } from '../../components/mark-attendance/mark-attendance';

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
        this.coachAvatar= data.coach[0].coachAvatar;
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
  public coachAvatar;
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
    console.log("going to add schedule");

    this.navCtrl.push(AddScheduleComponent, {coach:this.coach, role:this.user});
  }
  goToAttendance(){

    this.navCtrl.push(AttendanceComponent, {coach:this.coach, role:this.user});

  }
  goToFees(){

    this.navCtrl.push(FeesComponent, {coach:this.coach, role:this.user});
  }
  getKids(){
    console.log("in kids");
    this.navCtrl.push(KidsComponent, {coach:this.coach, role:this.user});
  }

  goToGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent, {coach:this.coach, role:this.user});
  }
  goToPerformance(){
    console.log("in performance");
    //this.navCtrl.push(PerformanceComponent, {coach:this.coach});
  }
  goToEvents(){
    console.log("in events");
    //this.navCtrl.push(EventsComponent, {coach:this.coach});
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

  viewAttendanceForToday(item){
    console.log("view Attendance For Today");
    this.navCtrl.push(MarkAttendanceComponent, {coach:this.coach, groupID:item.groupID,date:item.date, role:this.user});


  }


}
