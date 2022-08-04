import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  private notifications:any[]= [];

  constructor() { }


  addNotification(data){
    this.notifications.push(data);
  }


  getNotifications(){
    return this.notifications;
  }
}
