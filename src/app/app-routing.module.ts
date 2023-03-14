import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BridepageComponent } from './pages/bridepage/bridepage.component';
import { HairpageComponent } from './pages/hairpage/hairpage.component';
import { NailpageComponent } from './pages/nailpage/nailpage.component';
import { SkinpageComponent } from './pages/skinpage/skinpage.component';
import { MakeoverpageComponent } from './pages/makeoverpage/makeoverpage.component';
import { StylingComponent } from './pages/styling/styling.component';
import { GroomComponent } from './pages/groom/groom.component';
import { SpapageComponent } from './pages/spapage/spapage.component';
import { ThreadpageComponent } from './pages/threadpage/threadpage.component';
import { ViewstatusComponent } from './pages/viewstatus/viewstatus.component';

const routes: Routes = [

    {
      path:'',component:HomepageComponent
    },
    {
      path:'homepage',component:HomepageComponent
    },
    {
      path:'about',component:AboutComponent
    },
    {
      path:'products',component:ProductsComponent
    },
    {
      path:'services',component:ServicesComponent
    },
    {
      path:'signup',component:SignupComponent
    }
    ,
    {
      path:'contactus',component:ContactusComponent
    },
    {
      path:'bridepage',component:BridepageComponent
    },
    {
      path:'hairpage',component:HairpageComponent
    },
    {
      path:'nailpage',component:NailpageComponent
    },
    {
      path:'skinpage',component:SkinpageComponent
    },
    {
      path:'makeoverpage',component:MakeoverpageComponent
    },
    {
      path:'styling',component:StylingComponent
    },
    {
      path:'groom',component:GroomComponent
    },
    {
      path:'spapage',component:SpapageComponent
    },
    {
      path:'threadpage',component:ThreadpageComponent
    },
    {
      path:'viewstatus',component:ViewstatusComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
