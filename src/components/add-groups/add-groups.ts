import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { GroupsComponent } from '../groups/groups';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the AddGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-groups',
  templateUrl: 'add-groups.html'
})
export class AddGroupsComponent {

  text: string;
  public groupName;
  public result;
  public coach;
  public user;
  public feeAmount;
  public myDate= new Date();
  public packageList;
  public selectedPackage;
  public selectedGroup;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello AddGroupsComponent Component');
    this.text = 'Hello World';
    this.coach = this.navParams.get('coach');
    this.user = this.navParams.get('role');
    console.log("will call get packages");
    this.springData.getPackages(this.myDate).subscribe(
      data => {
        console.log("in subscribe to data of getPackages");

        this.packageList= data.packageList;
        this.selectedPackage= data.packageList[0];
        //alert("groupList seems like " + this.groupList.entries().next().value[1]);
      },
      err => console.error(err),
      () => console.log('getPackages completed')
    );
  }

  addGroup(){
    console.log("Add Group ");
    this.springData.addGroup(this.groupName,this.feeAmount, this.coach).subscribe(
      data => {
        console.log("in subscribe to data of add Group");

        this.result= data.result;
        this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
      },
      err => console.error(err),
      () => console.log('add Group completed')
    );

  }
  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName );
    }
  }

  goBackHome(){
    console.log("going back to home page");
    this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
  }


}
