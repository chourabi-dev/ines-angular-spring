import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  successMessage:string='';
  errorMessage:string='';
  isLoading:boolean = false;


  categories:any[] = [];


  form = new FormGroup({

    title: new FormControl('' , Validators.required ),
    price: new FormControl('' , Validators.required),
    quantity: new FormControl('' , Validators.required),
    category: new FormControl('' , Validators.required),
    

  })


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initDATA();
  }


  initDATA(){
    this.api.getCategories().toPromise().then((data:any[])=>{
      this.categories = data;
    })
  }


  save(){
    this.isLoading =true;

    const body = this.form.value;

    console.log(body);

    this.api.addNewProduct(body).toPromise().then((res:any)=>{
      console.log(res);

      if ( res.success === true ) {
        this.successMessage = res.message;

      } else {
        this.errorMessage = res.message;
        
      }
      
    }).catch((err)=>{
      console.log();

      this.errorMessage = "Something went wrong, please try again.";
      
    }).finally(()=>{
      this.isLoading = false;
    })
    
  }

}
