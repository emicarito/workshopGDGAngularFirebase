import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCzSszNKXD2uWlxUgxEFLZjLGRckIYCs0g",
      authDomain: "angular-workshop-8d092.firebaseapp.com",
      databaseURL: "https://angular-workshop-8d092.firebaseio.com",
      projectId: "angular-workshop-8d092",
      storageBucket: "angular-workshop-8d092.appspot.com",
      messagingSenderId: "52278694890",
      appId: "1:52278694890:web:cb69a682d41f1bc1"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
