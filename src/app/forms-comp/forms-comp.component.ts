import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-forms-comp',
  templateUrl: './forms-comp.component.html',
  styleUrls: ['./forms-comp.component.scss']
})
export class FormsCompComponent implements OnInit {

  // public dataForm!:FormGroup;
   public userProfileForm!:FormGroup;
   public toggleForm=true;


  constructor(   private formBuilder:FormBuilder) { }

  ngOnInit(): void {

  


//     this.userProfileForm =this.formBuilder.group({
//     firstNmae:['',Validators.required],
//     lastNmae:['',Validators.required],
//     address:this.formBuilder.group({
//       address1:[''],
//       address2:[''],
//       state:[''],
//       city:[''],
//       zip:[''],
//       email:[''],
//       phone:['']
//     })
// })
this.getFormData();
  
  }

public getFormData(){
  this.userProfileForm =this.formBuilder.group({
    firstName:['',[Validators.required,
    Validators.pattern("^([A-Za-z0-9.'+-_{}()@!#$%^&*+=:;<>?/]+([ A-Za-z0-9.'+-_{}()@!#$%^&*+=:;<>?/]+)*)$")]],
    lastName:['',[Validators.required,  Validators.pattern("^([A-Za-z0-9.'+-_{}()@!#$%^&*+=:;<>?/]+([ A-Za-z0-9.'+-_{}()@!#$%^&*+=:;<>?/]+)*)$")]],
    
    address:this.formBuilder.group({
      address1:['',[Validators.required,Validators.pattern('^([A-Za-z0-9]+( ?[A-Za-z0-9]+)*)$')]],
      address2:['',[Validators.required,Validators.pattern('^([A-Za-z0-9]+( ?[A-Za-z0-9]+)*)$')]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      zip:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)] ]
    })
})
}



  public onSubmit(){
    console.log(this.userProfileForm.value)
  }

  public formToggle(){
     this.toggleForm=!this.toggleForm;
     console.log(this.toggleForm);
     
  }
  


  }


