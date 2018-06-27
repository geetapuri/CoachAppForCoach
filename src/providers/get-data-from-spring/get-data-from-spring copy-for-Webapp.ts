
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
/*
  Generated class for the GetDataFromSpringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetDataFromSpringProvider {

  authenticated = false;

  constructor(public http: Http) {
    console.log('Hello GetDataFromSpringProvider Provider');
  }

  authenticate(credentials) {

    console.log("in authenticate");

   /* let headers = new Headers(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});*/
    let headers = new Headers ();
    headers.append('Authorization' , 'Basic ' + btoa(credentials.username  + ':' + credentials.password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let options = new RequestOptions({ headers: headers });
    let body = {
      'test' : 'test'
    }


    //return this.http.post(`http://172.20.10.2:8080/resourceLogin`,body, {headers: headers})
    return this.http.post(`/resourceLogin`, body, { headers: headers })
    .map(data  => data.json());

  }

  getGroups(myDate){
    console.log("in getGroups");

      let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'test': `test`
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/getGroups`, body, {headers: headers})
      .map(data => data.json());


  }

  getPackages(myDate){
    console.log("in getPackages");

      let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'test': `test`
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/getPackages`, body, {headers: headers})
      .map(data => data.json());


  }

  addSchedule(myDate, groupID, myTime){
    console.log("in add Schedule");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': myDate,
        'groupID': groupID,
        'time': myTime
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/addSchedule`, body, {headers: headers})
      .map(data => data.json());


  }

  addKid(kidName, groupID, packageID){
    console.log("in add Kid");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidName': kidName,
        'groupID': groupID,
        'packageID': packageID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/addKid`, body, {headers: headers})
      .map(data => data.json());


  }

  addGroup(groupName){
    console.log("in add Group");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupName': groupName
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/addGroup`, body, {headers: headers})
      .map(data => data.json());


  }

  getSchedule(myDate){
    console.log("in show schedule");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': myDate
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/getCalendarAll`, body, {headers: headers})
      .map(data => data.json());
  }

  saveSchedule(item, myDate){
    console.log("in save Schedule");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': myDate,
        'groupID': item.groupID,
        'calendarID': item.calendarID,
        'groupName' : item.groupName,
        'time': item.time
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/updateSchedule`, body, {headers: headers})
      .map(data => data.json());
  }

  getKids(){
    console.log("in get Kids");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': 'myDate'
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/getKids`, body, {headers: headers})
      .map(data => data.json());
  }

  viewAttendanceForKid(item){
    console.log(" in view attendance for kid, kidID = " + item.kidID);

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': item.kidID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/viewAttendanceKid`, body, {headers: headers})
      .map(data => data.json());
  }

  checkAttendance(item){
    console.log(" in check attendance for kid, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': item.date,
        'groupID': item.groupID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/checkAttendance`, body, {headers: headers})
      .map(data => data.json());
  }

  getKidsInGroup(item){
    console.log(" in getKidsInGroup, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupID': item.groupID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/getKidsInGroup`, body, {headers: headers})
      .map(data => data.json());
  }

  markAttendance(item, kidsList){
    console.log(" in markAttendance, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupID': item.groupID,
        'kidsList': kidsList,
        'date': item.date

      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/markAttendance`, body, {headers: headers})
      .map(data => data.json());
  }

  viewFeesForKid(item){
    console.log(" in view Fee for kid, kidID = " + item.kidID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': item.kidID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`/viewFees`, body, {headers: headers})
      .map(data => data.json());
  }

  payFees(kidID, myDate){
    console.log(" in payFees for kid, kidID = " + kidID);
    console.log(" in payFees, date received =  " + myDate);
      let headers = new Headers ({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = {
          'kidID': kidID,
          'dateOfAttendance':myDate
        }
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
      return this.http.post(`/payFees`, body, {headers: headers})
        .map(data => data.json());

  }

  getKidInfo(){
    console.log("In get Kids Info");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'test': 'test'
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`/getKidInfo`, body, {headers: headers})
    .map(data => data.json());
  }

  updateKid(kid, selectedGroup){
    console.log("In update Kid Info");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'kidID': kid.kidID,
      'kidName': kid.kidName,
      'groupID': selectedGroup.groupID
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`/updateKid`, body, {headers: headers})
    .map(data => data.json());

  }

updateGroup(group){
  console.log("In update Group ");
  let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'groupID': group.groupID,
      'groupName': group.groupName

    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`/updateGroup`, body, {headers: headers})
    .map(data => data.json());
}

}
