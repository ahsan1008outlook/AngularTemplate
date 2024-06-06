import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HTTPService } from 'src/app/core/service/http.service';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Component({
  selector: 'aam-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],

})
export class FeatureEditComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(
    private httpService: HTTPService,
  ) { }

  ngOnInit() {
    this.initializeform();
  }

  initializeform() {
    this.uploadForm = new FormGroup({
      title: new FormControl('Ahsan'),
    });
  }

  formSubmit() {
    if (this.uploadForm.valid) {
      this.createData(this.uploadForm.value).subscribe({
        next: (res: any) => {
          console.log(res)
        }
      })
    } else {
      console.error('Invalid form');
    }
  }

  createData(data): Observable<any> {
    return this.httpService.create({ 
      endpoint: 'brands-payment-security', 
      body: data 
    }).pipe(
      tap((response) => {
        console.log('upload data', response);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }
}

