import { Component, OnInit } from '@angular/core';
import { DndApiCacheService } from '../../shared/dnd-api-cache.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  races: any[] = [];
  classes: any[] = [];

  constructor(private dndApi: DndApiCacheService) {}

  ngOnInit(): void {
    this.dndApi.get<any>('https://www.dnd5eapi.co/api/races').subscribe(res => {
      this.races = res.results;
    });
    this.dndApi.get<any>('https://www.dnd5eapi.co/api/classes').subscribe(res => {
      this.classes = res.results;
    });
  }
}
