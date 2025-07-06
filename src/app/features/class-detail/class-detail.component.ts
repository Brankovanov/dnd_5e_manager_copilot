import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  classData: any = null;
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
        this.http.get(`https://www.dnd5eapi.co/api/classes/${index}`).subscribe({
          next: (data) => {
            this.classData = data;
            this.loading = false;
          },
          error: () => {
            this.error = 'Failed to load class details.';
            this.loading = false;
          }
        });
      } else {
        this.error = 'No class specified.';
        this.loading = false;
      }
    });
  }
}
