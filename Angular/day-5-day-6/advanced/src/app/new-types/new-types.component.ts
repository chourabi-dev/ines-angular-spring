import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  async takePhoto() {


    let camera = this.getCamera().then((res:any)=>{

      console.log(res);

      // we can take photo now !!

      res.takePhoto();
      

    }).catch(
      (err)=>{ console.log(err);
     }
     
    );



    /*let camera = await this.getCamera();


    console.log("test");*/
    



  }



  getCamera(){

    let promise = new Promise((success,failure)=>{

      // !! FAKE CODE !!
      setTimeout(() => {
        
        // OK we have the camera 
        success(
          { instance:'camera', takePhoto:()=>{ console.log("photo taken");} }
         );

      }, 3000);

    })
     
    return promise;
  }


  /***************************************************** */



  watchMyPosition(){
    this.getMyCords().subscribe((res)=>{
      console.log(res);
      
    },(err)=>{

      console.log(err);
      
    })
  }

  getMyCords(){
    let obersable = new Observable((obverser)=>{

    
      navigator.geolocation.watchPosition(
        
        (pos)=>{
        obverser.next(pos);
      },(err)=>{
        obverser.error(err);
      })

    })


    return obersable;
  }
  
}
