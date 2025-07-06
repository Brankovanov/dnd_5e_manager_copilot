import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  races: any[] = [];
  classes: any[] = [];
  racesLoading = true;
  classesLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://www.dnd5eapi.co/api/races').subscribe(res => {
      this.races = res.results;
      this.racesLoading = false;
    }, () => {
      this.racesLoading = false;
    });
    this.http.get<any>('https://www.dnd5eapi.co/api/classes').subscribe(res => {
      this.classes = res.results;
      this.classesLoading = false;
    }, () => {
      this.classesLoading = false;
    });
  }
}
