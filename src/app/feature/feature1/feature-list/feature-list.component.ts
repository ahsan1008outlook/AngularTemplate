import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CanonicalService } from 'src/app/core/service/canonical.service';
import { FeatureService } from '../../feature.service';

@Component({
  selector: 'aam-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  data: any[];
  editedItem: any = null;
  newItem: any = {
    name: '',
    type: '',
    image: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isActive: '',
    _id: ''
  };

  constructor(private apiService: FeatureService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  editItem(item: any) {
    this.editedItem = this.editedItem === item ? null : item;
  }

  saveItem(item: any, event: MouseEvent) {
    console.log('Saving item:', item);
    this.editedItem = null;
    event.stopPropagation();
  }
  addNewRow() {
    this.newItem = {
      name: '',
      type: '',
      image: '',
      createdBy: '',
      createdOn: '',
      modifiedBy: '',
      modifiedOn: '',
      isActive: '',
      _id: ''
    };
    this.editedItem = null;
  }

  saveNewItem() {
    this.data.push(this.newItem);
    this.newItem = null;
  }
}