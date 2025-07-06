import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  races: any[] = [];
  classes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://www.dnd5eapi.co/api/races').subscribe(res => {
      this.races = res.results;
    });
    this.http.get<any>('https://www.dnd5eapi.co/api/classes').subscribe(res => {
      this.classes = res.results;
    });
  }
}
