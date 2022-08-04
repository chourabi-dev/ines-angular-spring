import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any[]=[];


  isLoading:boolean = true;

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getUserListFromServer().subscribe((res:any[])=>{


      console.log(res);

      this.userList = res;
      

      this.isLoading = false;

    },(err)=>{


      this.isLoading = false;
      
    })
  }

}
