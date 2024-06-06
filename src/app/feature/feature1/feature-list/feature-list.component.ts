import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CanonicalService } from 'src/app/core/service/canonical.service';
import { HttpServiceParam } from 'src/app/core/interface/common/http-service-param';
import { HTTPService } from 'src/app/core/service/http.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'aam-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  url = '?';
  data: any = [];

  public cookieValue: string
  currentPage: number;
  pageSize: number;
  constructor(
    private metaTagService: Meta,
    private MetaTitle: Title,
    private canonicalService: CanonicalService,
    private cookieService: CookieService,
    private httpService: HTTPService
  ) { }

  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
    this.getData().subscribe({
      next: (res) => {
        this.data = res.data;
      }
    })
  }
  setMetaTag() {
    this.MetaTitle.setTitle("Feature 1 List");
    this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Music CRUD, Angular Universal',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
  ngOnDestroy(): void {
    this.MetaTitle.setTitle('Feature 1 List Destroyed')

  }

  getData(): Observable<any> {
    return this.httpService.get({
      url: 'https://dev-app.starbazaar.pk/admin/api/v1/',
      endpoint: 'brands-payment-security',

    }).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  onPageChange(page: number) {
    this.getPageDate();
  }

  getPageDate() {
    this.httpService.get({ 
      url: 'https://dev-app.starbazaar.pk/admin/api/v1', 
      endpoint: 'brands-payment-security' 
    }).pipe(
      tap((response) => {
        this.data = response;
        console.log('get data', response);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }
}