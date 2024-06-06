import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'aam-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],
})
export class FeatureEditComponent implements OnInit {
  uploadForm:FormBuilder;

  constructor() {}

  ngOnInit() {
    this.initializeform();
  }

  initializeform() {
  }

  formSubmit() {
  }
}
