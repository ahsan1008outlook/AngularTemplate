import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from '../../feature.service';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/core/service/swal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'aam-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],
})
export class FeatureEditComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private featureService: FeatureService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      group: ['', [Validators.required]],
      company: ['', [Validators.required]],
      person: [''],
      designation: [''],
      department: [''],
      officeAddr: [''],
      officePhone: [''],
      fax: [''],
      residenceAddr: [''],
      mobile: [''],
      residencePhone: [''],
      email: [''],
      webSite: [''],
      description: [''],
    })
  }
  onSubmit() {
    this.featureService
      .addRecord(this.form.value)
      // .subscribe({
      //   next: (res: any) => {
      //     // if (res.isSuccess) {
      //     console.log(res)
            
      //     // }
      //   },
      //   error: (err) => {
      //     if (err.error.message) {
      //       Swal.fire({
      //         title: "Error",
      //         text: err.error.message,
      //         icon: 'error'
      //       });
      //     } else {
      //       Swal.fire({
      //         title: "Error",
      //         text: "Something went wrong",
      //         icon: 'error'
      //       });
      //     }
      //   }
      // })

  }
}
