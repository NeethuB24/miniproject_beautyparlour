import { Injectable } from '@angular/core';
import { distdatabase} from 'src/assets/data/data';
import { Firestore, collectionData, collection,addDoc,getDoc,doc} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BpheroService {
myData:any
  constructor(private fs:Firestore ,private db: AngularFirestore) { }
   getData(){
     return distdatabase
   }
  // addData(data:any)
  // {
  //   const dataCollection=collection(this.fs,'userdata')
  //   addDoc(dataCollection,data).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  //   // console.log(data);
    
  // }
  insertData(docRef:any,data:any)
  {
    data.status=false
    addDoc(docRef,data).then(()=>{alert("Request Sended")}).catch((err)=>alert(err))
  }

  findBooking(num:any){

    const findCollection = collection(this.fs, 'appointment')
    collectionData(findCollection,{idField: 'id'}).subscribe(data => {
     this.myData = data.map((data:any) => data.phone ===num)
     if(this.myData){
      data.map((stData:any)=>{
        if(stData.status){
          alert('Booking confirmed')
        }else{
          alert('Booking Pending')
        }
      })
     }
    })
  }


    
    

}







