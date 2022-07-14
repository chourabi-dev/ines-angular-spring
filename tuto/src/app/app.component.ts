import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tuto';

  year = 2022;

  switch = true;

  username:string='chourabi taher'



  employees = [ 
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    {  username:'chourabi taher', email:'tchourabi@gmail.com'  } ,
    
  ];


  switchBloc:boolean = false;



}
