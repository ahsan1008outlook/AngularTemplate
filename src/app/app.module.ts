import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AngularzModule } from './shared/modules/angularz.module';
import { RootzModule } from './shared/modules/rootz.module';
import { UtilsModule } from './shared/component/utils/utils.module';
import { AppInjector } from './core/static/AppInjector';
import { ThemeModule } from './theme/theme.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // FullComponent,
    // VerticalNavigationComponent,
    // BreadcrumbComponent,
    // VerticalSidebarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AngularzModule,
    RootzModule,
    SharedModule,
    AppRoutingModule,
    UtilsModule,
    ThemeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
