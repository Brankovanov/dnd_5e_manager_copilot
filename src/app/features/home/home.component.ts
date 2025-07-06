import { Component, OnInit } from '@angular/core';
import { DndApiCacheService } from '../../shared/dnd-api-cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  races: any[] = [];
  classes: any[] = [];
  racesLoading = true;
  classesLoading = true;

  constructor(private dndApi: DndApiCacheService) {}

  ngOnInit(): void {
    this.dndApi.get<any>('https://www.dnd5eapi.co/api/races').subscribe(res => {
      this.races = res.results;
      this.racesLoading = false;
    }, () => {
      this.racesLoading = false;
    });
    this.dndApi.get<any>('https://www.dnd5eapi.co/api/classes').subscribe(res => {
      this.classes = res.results;
      this.classesLoading = false;
    }, () => {
      this.classesLoading = false;
    });
  }
}
