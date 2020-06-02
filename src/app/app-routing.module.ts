import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MyTabsComponent } from './components/my-tabs/my-tabs.component';

const routes: Routes = [
  { path: '', component: MyTabsComponent  },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
