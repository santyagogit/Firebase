import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'My App')

  ],
  providers: [AngularFireDatabase, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
