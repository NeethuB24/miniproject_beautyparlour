import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    ServicesComponent,
    ProductsComponent,
    SignupComponent,
    AboutComponent,
    ContactusComponent,
    BridepageComponent,
    HairpageComponent,
    NailpageComponent,
    SkinpageComponent,
    MakeoverpageComponent,
    StylingComponent,
    GroomComponent,
    SpapageComponent,
    ThreadpageComponent,
    ViewstatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
