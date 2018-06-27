import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , Injectable} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpRequest, HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../components/login/login';
import { GetDataFromSpringProvider } from '../providers/get-data-from-spring/get-data-from-spring';
import { ScheduleComponent} from '../components/schedule/schedule';
import { AddScheduleComponent } from '../components/add-schedule/add-schedule';
import { GetScheduleComponent } from '../components/get-schedule/get-schedule';
import { EditScheduleDetailsComponent } from '../components/edit-schedule-details/edit-schedule-details';
import { AttendanceComponent } from '../components/attendance/attendance';
import { MarkAttendanceComponent } from '../components/mark-attendance/mark-attendance';
import { MarkAttendanceForGroupComponent } from '../components/mark-attendance-for-group/mark-attendance-for-group';
import { FeesComponent } from '../components/fees/fees';
import { PayFeesComponent } from '../components/pay-fees/pay-fees';
import { ManageClassesComponent } from '../components/manage-classes/manage-classes';
import { KidsComponent } from '../components/kids/kids';
import { EditKidComponent } from '../components/edit-kid/edit-kid';
import { AddKidComponent } from '../components/add-kid/add-kid';
import { ClassesComponent } from '../components/classes/classes';
import { AddClassesComponent } from '../components/add-classes/add-classes';
import { GroupsComponent } from '../components/groups/groups';
import { AddGroupsComponent } from '../components/add-groups/add-groups';
import { EditGroupsComponent } from '../components/edit-groups/edit-groups';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    ScheduleComponent,
    AddScheduleComponent,
    GetScheduleComponent,
    EditScheduleDetailsComponent,
    AttendanceComponent,
    MarkAttendanceComponent,
    MarkAttendanceForGroupComponent,
    FeesComponent,
    PayFeesComponent,
    ManageClassesComponent,
    KidsComponent,
    EditKidComponent,
    AddKidComponent,
    ClassesComponent,
    AddClassesComponent,
    GroupsComponent,
    AddGroupsComponent,
    EditGroupsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    ScheduleComponent,
    AddScheduleComponent,
    GetScheduleComponent,
    EditScheduleDetailsComponent,
    AttendanceComponent,
    MarkAttendanceComponent,
    MarkAttendanceForGroupComponent,
    FeesComponent,
    PayFeesComponent,
    ManageClassesComponent,
    KidsComponent,
    EditKidComponent,
    AddKidComponent,
    ClassesComponent,
    AddClassesComponent,
    GroupsComponent,
    AddGroupsComponent,
    EditGroupsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetDataFromSpringProvider,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ]
})
export class AppModule {}
