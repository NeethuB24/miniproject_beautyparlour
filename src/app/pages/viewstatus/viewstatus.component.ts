import { Component } from '@angular/core';
import { BpheroService } from 'src/app/bphero.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent {

  pnumb:any

  constructor(private fs:BpheroService){}

  find(){
    this.fs.findBooking(this.pnumb)
  }

}
