import { GameComponent } from './components/game/game.component';
import { GameService } from 'src/app/services/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesComponent } from './components/games/games.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameDetailsService } from './services/game-details.service';
import { PostUserService } from './services/post-user.service';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { AboutAuthComponent } from './components/about-auth/about-auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RegisterComponent,
    AboutComponent,
    SignInComponent,
    GamesComponent,
    GameComponent,
    DashboardComponent,
    GameDetailsComponent,
    NavbarAuthComponent,
    AboutAuthComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ GameService, GameDetailsService, PostUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
