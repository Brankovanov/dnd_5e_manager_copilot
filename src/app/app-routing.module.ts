import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CharacterListComponent } from './features/character-list/character-list.component';
import { CharacterCreateComponent } from './features/character-create/character-create.component';
import { CharacterEditComponent } from './features/character-edit/character-edit.component';
import { CharacterDetailComponent } from './features/character-detail/character-detail.component';
import { RaceDetailComponent } from './features/race-detail/race-detail.component';
import { ClassDetailComponent } from './features/class-detail/class-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'create', component: CharacterCreateComponent },
  { path: 'edit/:id', component: CharacterEditComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: 'races/:index', component: RaceDetailComponent },
  { path: 'classes/:index', component: ClassDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
