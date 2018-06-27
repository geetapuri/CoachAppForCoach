import { Component , OnInit } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { KidsComponent } from '../kids/kids';
/**
 * Generated class for the AddKidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-kid',
  templateUrl: 'add-kid.html'
})
export class AddKidComponent implements OnInit{

  ngOnInit(){
    console.log("will call get Groups");
    this.springData.getGroups(this.myDate).subscribe(
      data => {
        console.log("in subscribe to data of getGroups");

        this.groupList= data.groupList;
        this.selectedGroup= data.groupList[0];
        console.log("groupList seems like " + this.groupList.entries().next().value[1]);
      },
      err => console.error(err),
      () => console.log('getGroups completed')
    );
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

  text: string;
  myDate: String = new Date().toISOString();
  groupList = [];
  public selectedGroup;
  packageList = [];
  public selectedPackage;
  public kidName;
  public result;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello AddKidComponent Component');
    this.text = 'Hello World';

  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName );
    }
  }

  addKid(){
    console.log("Add kid");
    this.springData.addKid(this.kidName, this.selectedGroup.groupID, this.selectedPackage.packageID).subscribe(
      data => {
        console.log("in subscribe to data of addKid");

        this.result= data.result;
        this.navCtrl.push(KidsComponent);
      },
      err => console.error(err),
      () => console.log('addKid completed')
    );
  }

}
