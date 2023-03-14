import { Injectable } from '@angular/core';
import { distdatabase} from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class BpheroService {

  constructor() { }
  getData(){
    return distdatabase
  }
}







