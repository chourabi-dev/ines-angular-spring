import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  notificationsImage:any[]=[];


  constructor(private notifications:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsImage = this.notifications.getNotifications();


  }

}
