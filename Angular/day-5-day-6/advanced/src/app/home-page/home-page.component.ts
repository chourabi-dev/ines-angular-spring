import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  notificationsImage:any[]=[];


  constructor(private notifications:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsImage = this.notifications.getNotifications();


    setInterval(()=>{
      this.notifications.addNotification({ date:new Date() })
    },3000)
  }

}
