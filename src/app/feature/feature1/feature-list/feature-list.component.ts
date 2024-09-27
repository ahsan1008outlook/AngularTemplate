import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FeatureService } from '../../feature.service';

@Component({
  selector: 'aam-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  public cookieValue: string
  public dataSource: MatTableDataSource<unknown> = new MatTableDataSource<unknown>();
  public displayedColumns = [
    "group", "company",
    "person", "designation", "department", "officeAddr", "officePhone"];
  // , "fax", "residenceAddr", "mobile", "residencePhone", "email", "webSite", "description",
  constructor(
    private featureService: FeatureService

  ) { }

  ngOnInit(): void {
    this.dataSource.data = this.featureService.list
  }
}