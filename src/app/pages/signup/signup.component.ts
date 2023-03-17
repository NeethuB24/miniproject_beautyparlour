import { Component } from '@angular/core';
import { BpheroService } from 'src/app/bphero.service';
import { Firestore,collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent
{
 name:string='';
 email:string='';
 phone:string='';
 ddate:string='';
 reqservice:string='';

 
constructor(private fire:Firestore,public hero:BpheroService){}
 subform()
 {
  const data={
    name:this.name,
    email:this.email,
    phone:this.phone,
    ddate:this.ddate,
    reqservice:this.reqservice
  }
  console.log(data);
  const docRef=collection(this.fire,"appointment")
  this.hero.insertData(docRef,data)
  // this.fire.addData(data)
  this.name=''
  this.phone=''
  this.email=''
  this.ddate=''
  this.reqservice=''
}
}
