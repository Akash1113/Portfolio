import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./components/post-create/post-create.component";
import { ImageUploadComponent } from "./components/image-upload/image-upload.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatDashComponent } from "./components/mat-dash/mat-dash.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MyTabsComponent } from "./components/my-tabs/my-tabs.component";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { QuestionsComponent } from './components/questions/questions.component';

import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { MyEducationComponent } from './components/my-education/my-education.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { DescriptionModalComponent } from './components/description-modal/description-modal.component';
import { MyConceptualComponent } from './components/my-conceptual/my-conceptual.component';
import { MyInterpersonalComponent } from './components/my-interpersonal/my-interpersonal.component';
import { MyIntroComponent } from './components/my-intro/my-intro.component';
import { MyWorkexpComponent } from './components/my-workexp/my-workexp.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    ImageUploadComponent,
    MatDashComponent,
    MyTabsComponent,
    AboutMeComponent,
    ContactMeComponent,
    QuestionsComponent,
    MyNavbarComponent,
    MyEducationComponent,
    MyProjectsComponent,
    MyFooterComponent,
    DescriptionModalComponent,
    MyConceptualComponent,
    MyInterpersonalComponent,
    MyIntroComponent,
    MyWorkexpComponent,
  ],
  imports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
