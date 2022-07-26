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


  /************************************* attrs & pipes ****************************************** */



  photoURL:string="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" 
  condiIntro:boolean = false; 
  userConnected:boolean = true;  
  today:Date = new Date(); 
  userEmail:string = 'tchourabi@gmail.com';




  /******************************** events ************************************ */




  buttonClick(){
    console.log("btn clicked");
    
  }



  nbrLikes:number = 10; 
  didLike:boolean = false;


  like(){
    if (this.didLike === false) {
      this.nbrLikes++;
    } else {
      this.nbrLikes--;
    }

    this.didLike = ! this.didLike; 
  }


  /********************************************************* */

  readMore:boolean = false;

  readMoreClick(){
    this.readMore = true;
  }

  readLessClick(){
    this.readMore = false;
  }
  /********************************** */

/**
 * 
  val:string='';

  todos:any[] = [];


  isTyping(e){
    const val = e.target.value; 

    const key = e.key;

    if (key === 'Enter') {
        this.todos.push(
          { todo: val , createdAt: new Date() }
        )

        e.target.value='';
    }
     
  }
 */


  x = 0;
  y = 0; 
  
  mouseMoving(event){  
    const x = event.clientX;
    const y = event.clientY;
  
    this.x= x;
    this.y = y; 
  }


  /************************************************************************* */



  articles:any[]=[
    { title:'Angualr', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil at animi? Id quos autem deleniti culpa, consectetur, ipsum quia voluptatum eius enim eaque repellendus dolorum possimus porro minima doloribus?" },
    { title:'Springboot', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil at animi? Id quos autem deleniti culpa, consectetur, ipsum quia voluptatum eius enim eaque repellendus dolorum possimus porro minima doloribus?" },
    { title:'ReactJS', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil at animi? Id quos autem deleniti culpa, consectetur, ipsum quia voluptatum eius enim eaque repellendus dolorum possimus porro minima doloribus?" },
    
  ]



}
