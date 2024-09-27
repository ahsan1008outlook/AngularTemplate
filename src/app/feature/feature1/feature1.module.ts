import { NgModule } from '@angular/core';
import { Feature1RoutingModule } from './feature1-routing.module';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { FeatureAddComponent } from './feature-add/feature-add.component';

@NgModule({
  declarations: [
    FeatureDetailComponent,
    FeatureListComponent,
    FeatureEditComponent,
    FeatureAddComponent
  ],
  imports: [SharedModule, Feature1RoutingModule],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class Feature1Module {}
