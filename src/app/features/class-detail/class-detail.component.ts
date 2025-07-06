import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DndApiCacheService } from '../../shared/dnd-api-cache.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  classData: any = null;
  loading = true;
  error: string | null = null;
  classLevels: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dndApi: DndApiCacheService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const index = params.get('index');
      if (index) {
        this.loading = true;
        this.error = null;
        this.dndApi.get<any>(`https://www.dnd5eapi.co/api/classes/${index}`).subscribe({
          next: (data) => {
            this.classData = data;
            this.loading = false;
            // Fetch class levels if available
            if (data.class_levels && typeof data.class_levels === 'string' && data.class_levels.startsWith('/api/')) {
              const fullUrl = `https://www.dnd5eapi.co${data.class_levels}`;
              const cached = sessionStorage.getItem(fullUrl);
              if (cached) {
                this.classLevels = JSON.parse(cached);
              } else {
                this.dndApi.get<any>(fullUrl).subscribe(res => {
                  this.classLevels = res;
                });
              }
            }
            // ...existing code for additional links and url fields...
            const additionalLinks = [
              'spells',
              'subclasses',
              'features',
              'proficiencies'
            ];
            additionalLinks.forEach(linkKey => {
              const link = data[linkKey];
              if (typeof link === 'string' && link.startsWith('/api/')) {
                const fullUrl = `https://www.dnd5eapi.co${link}`;
                const cached = sessionStorage.getItem(fullUrl);
                if (cached) {
                  console.log(`Loaded from cache: ${linkKey}`, JSON.parse(cached));
                } else {
                  this.dndApi.get<any>(fullUrl).subscribe(res => {
                    console.log(`Fetched from API: ${linkKey}`, res);
                  });
                }
              }
            });
            this.extractAndFetchUrls(data);
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

  private extractAndFetchUrls(obj: any): void {
    if (Array.isArray(obj)) {
      obj.forEach(item => this.extractAndFetchUrls(item));
    } else if (obj && typeof obj === 'object') {
      for (const key of Object.keys(obj)) {
        if (key === 'url' && typeof obj[key] === 'string' && obj[key].startsWith('/api/')) {
          const fullUrl = `https://www.dnd5eapi.co${obj[key]}`;
          const cached = sessionStorage.getItem(fullUrl);
          if (cached) {
            console.log(`Loaded from cache: url`, JSON.parse(cached));
          } else {
            this.dndApi.get<any>(fullUrl).subscribe(res => {
              console.log(`Fetched from API: url`, res);
            });
          }
        } else if (typeof obj[key] === 'object') {
          this.extractAndFetchUrls(obj[key]);
        }
      }
    }
  }
}
