import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TicketService } from '../ticket.service';
import { User } from '../tickets';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


 
  myform!:FormGroup

  
  constructor(private ts : TicketService, private fb:FormBuilder){
    this.myform = this.fb.group({
      name:new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
 



  onSubmit() {
    // Process the form data here
    
    const user: User = {
      name:this.myform.value['name'],
      email:this.myform.value['email'],
      password:this.myform.value['password']
    }
    console.log(user)
    // const user: User = {
    //   name:this.registrationForm.value['name'],
    //   email:this.registrationForm.value['email'],
    //   password:this.registrationForm.value['password']
    // }
     this.ts.registerUser(user).subscribe((res)=>{
      console.log('check backend information')
 })
  }
 
}
