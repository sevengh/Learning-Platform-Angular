import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaymentComponent } from './payment/payment.component';
import { LessonComponent } from './lesson/lesson.component';
import { PostComponent } from './post/post.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { SecurityComponent } from './profile/security/security.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { TrademarkComponent } from './trademark/trademark.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
    NavigationComponent,
    MainComponent,
    PaymentComponent,
    LessonComponent,
    PostComponent,
    UserListComponent,
    LessonListComponent,
    LessonAddComponent,
    LessonDetailsComponent,
    DashboardComponent,
    SecurityComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    TrademarkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'lessons', component: LessonListComponent },
      { path: 'lesson/:id', component: LessonDetailsComponent },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [AuthGuardService],
      },
      { path: 'options', component: DashboardComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'security',
        component: SecurityComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService],
      },
      { path: 'payment', component: PaymentComponent },
      { path: '**', component: ErrorComponent },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
