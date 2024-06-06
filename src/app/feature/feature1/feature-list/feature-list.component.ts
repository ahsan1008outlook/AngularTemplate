import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Meta, Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CanonicalService } from 'src/app/core/service/canonical.service';
import { FeatureService } from '../../feature.service';

type BrandPayments = {
  name: string;
  type: string;
  image: string;
  createdOn: Date;
  modifiedOn: Date;
}

@Component({
  selector: 'aam-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  public cookieValue: string
  public dataSource: MatTableDataSource<unknown> = new MatTableDataSource<unknown>();
  public displayedColumns = ["name", "type", "image", "createdOn", "modifiedOn", "actions"];
  constructor(
    private metaTagService: Meta, 
    private MetaTitle: Title,
    private canonicalService: CanonicalService,
    private cookieService: CookieService,
    private featureService: FeatureService
    
  ) {}
    
  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
    this.getList()
  }
  setMetaTag(){
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

  async getList() {
    try {
      this.featureService.getRecords().subscribe((res: {isSuccess: boolean, data: BrandPayments[]}) => {
        console.log(res);
        let temp: BrandPayments[] = []
        res.data.forEach(element => {
          temp.push({name: element.name, type: element.type, image: element.image, createdOn: new Date(element.createdOn), modifiedOn: new Date(element.modifiedOn)})
        });
        this.dataSource.data = temp;
      });
    }
    catch (err) {
      console.error(err)
    }
  }
}