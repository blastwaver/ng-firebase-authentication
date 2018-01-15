import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from "./core/core.module";
import { config } from "./config";
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthService } from './core/auth.service';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    CoreModule,
  ],
  providers: [
    // Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

