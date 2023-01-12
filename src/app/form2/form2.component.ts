import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {


  public loginForm!:FormGroup;



  constructor(
    private formBuilder:FormBuilder
    ) { }


  ngOnInit(): void {


    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(2)]]
    })
   
  }


  isloggedIn(){

    console.log(this.loginForm.value);
    console.log("form successfully submitted")

  }


}
