import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from '../../feature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aam-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss'],
})
export class FeatureEditComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private featureService: FeatureService, private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    try {
      this.featureService.addRecord(this.form.value).subscribe((res) => {
        this.router.navigate(['/feature1/list'])
      })
    }
    catch (err) {
      console.error(err);
    }
  }
}
