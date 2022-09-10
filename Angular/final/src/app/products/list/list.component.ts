import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  isLoading:boolean = false;

  errorMessage:string='';


  products:any[] = [];



  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }


  initData(){
    this.errorMessage='';

    this.isLoading = true;

    this.api.getProductsList().toPromise().then(
      (data:any[])=>{
        console.log(data);

        this.products = data;
        
      }
    ).catch(
      (err)=>{
        console.log(err);
        
        this.errorMessage = "Something went wrong, please try again.";
      }
    ).finally(

      ()=>{
        this.isLoading = false;
      }
    )
  }



  deleteProduct(id){
    
    this.api.deleteProductById(id).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.initData();

      } else {
        this.errorMessage = res.message;
      }
    })
  }

}
