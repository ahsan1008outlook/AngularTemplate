import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, RequiredValidator, Form, FormControl } from '@angular/forms';
import { response } from 'express';
import { HTTPService } from 'src/app/core/service/http.service';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Component({
  selector: 'aam-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],

})
export class FeatureEditComponent implements OnInit {
  uploadForm: any;
  url = 'https://dev-app.starbazaar.pk/admin/api/v1/brands-payment-security?';


  constructor(
    private formBuilder: FormBuilder,
    private httpService: HTTPService,
  ) { }

  ngOnInit() {
    this.initializeform();
  }

  initializeform() {
    this.uploadForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  formSubmit() {
    if (this.uploadForm.value.valid) {
      this.createData(this.uploadForm.value);
    } else {
      console.error('Invalid form');
    }
  }

  createData(data): Observable<any> {
    return this.httpService.create({ url: this.url, endpoint: '', body: data }).pipe(
      tap((response) => {
        console.log('upload data', response);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }
}

