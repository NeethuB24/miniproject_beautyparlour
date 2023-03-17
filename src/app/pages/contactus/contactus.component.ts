import { Component } from '@angular/core';
import { BpheroService } from 'src/app/bphero.service';
import { Firestore,collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent 
{
  cname:string='';
  cemail:string='';
  cphone:string='';
  
 
  
 constructor(private fire:Firestore,public hero:BpheroService){}
  submit()
  {
   const data={
     cname:this.cname,
     cemail:this.cemail,
     cphone:this.cphone,
    
   }
   console.log(data);
   const docRef=collection(this.fire,"contactUs")
   this.hero.insertData(docRef,data)
   // this.fire.addData(data)
   this.cname=''
   this.cphone=''
   this.cemail=''
 }
}
