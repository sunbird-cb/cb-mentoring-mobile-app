import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonFormData } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { CommonRoutes } from 'src/global.routes';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public formData: JsonFormData;
  callSessions: string=CommonRoutes.callSessions;
  sessions =[{
    _id:1,
    title:'Topic, Mentor name',
    subTitle: 'Short description ipsum dolor sit amet, consectetur',
    description:'Short description ipsum dolor sit amet, consectetur',
    date:'20/11/2021',
    status:'Live'
  },
  {
    _id:2,
    title:'Topic, Mentor name',
    subTitle: 'Short description ipsum dolor sit amet, consectetur',
    description:'Short description ipsum dolor sit amet, consectetur',
    date:'20/11/2021',
    status:'Live'
  },{
    _id:3,
    title:'Topic, Mentor name',
    subTitle: 'Short description ipsum dolor sit amet, consectetur',
    description:'Short description ipsum dolor sit amet, consectetur',
    date:'20/11/2021'
  },{
    _id:4,
    title:'Topic, Mentor name',
    subTitle: 'Short description ipsum dolor sit amet, consectetur',
    description:'Short description ipsum dolor sit amet, consectetur',
    date:'20/11/2021'
  }
]

public headerConfig: any = {
  menu: true,
  notification: true,
  headerColor: 'primary',
};
  constructor(
    private http: HttpClient,
    private navController: NavController,
    private deeplinks: Deeplinks) {}
    
  ngOnInit() {
    this.deeplinks.routeWithNavController(this.navController, {
      '/sessions': '',
    }).subscribe((match) => {
      if(match.$link.path === '/sessions'){
        this.navController.navigateForward('/sessions',{
          queryParams:{
            type:'all-sessions'
          }
        });
      }
    }, (nomatch) => {
    });
  }
  eventAction(event){
    console.log(event,"event");
  }
}