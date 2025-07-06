import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CharacterListComponent } from './features/character-list/character-list.component';
import { CharacterCreateComponent } from './features/character-create/character-create.component';
import { CharacterEditComponent } from './features/character-edit/character-edit.component';
import { CharacterDetailComponent } from './features/character-detail/character-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { RaceDetailComponent } from './features/race-detail/race-detail.component';
import { ClassDetailComponent } from './features/class-detail/class-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CharacterListComponent,
    CharacterCreateComponent,
    CharacterEditComponent,
    CharacterDetailComponent,
    NavbarComponent,
    HomeComponent,
    RaceDetailComponent,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
