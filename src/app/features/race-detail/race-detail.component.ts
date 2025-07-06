import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {
  race: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const index = params.get('index');
      if (index) {
        this.loading = true;
        this.error = null;
        this.http.get(`https://www.dnd5eapi.co/api/races/${index}`).subscribe({
          next: (data) => {
            console.log(data)
            this.race = data;
            this.loading = false;
          },
          error: () => {
            this.error = 'Failed to load race details.';
            this.loading = false;
          }
        });
      } else {
        this.error = 'No race specified.';
        this.loading = false;
      }
    });
  }
}
