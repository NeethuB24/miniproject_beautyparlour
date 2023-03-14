import { Component } from '@angular/core';
import { BpheroService } from 'src/app/bphero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 constructor(private D:BpheroService,private R:Router){}
 distdatabase=this.D.getData();
 gotodistpage(id:any)
 {
    localStorage.setItem('id',id)
     this.R.navigate(['/sigle'])
 }
}



