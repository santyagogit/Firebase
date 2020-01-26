import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  // course$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('courses').valueChanges();
    // this.course$ = db.
    console.log(this.courses$);
  }
}
