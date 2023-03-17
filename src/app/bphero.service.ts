import { Injectable } from '@angular/core';
import { distdatabase} from 'src/assets/data/data';
import { Firestore, collectionData, collection,addDoc} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BpheroService {

  constructor(private fs:Firestore) { }
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
    addDoc(docRef,data).then(()=>{alert("Request Sended")}).catch((err)=>alert(err))
  }
}







