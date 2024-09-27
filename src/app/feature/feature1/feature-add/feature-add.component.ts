import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'aam-feature-add',
  templateUrl: './feature-add.component.html',
  styleUrls: ['./feature-add.component.scss']
})
export class FeatureAddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  onSubmit() {
    this.router.navigate(['dashboard'])
  }
}
